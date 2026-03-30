"use client";

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Send, CheckCircle } from 'lucide-react';

const supabase = createClient();

export default function RequestPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    businessName: '',
    whatYouSell: '',
    description: '',
    productsList: '',
    colors: '',
    style: 'fun',
    name: '',
    contactInfo: '',
    tier: 'free',
    extras: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("requests").insert([
      {
        business_name: formData.businessName,
        description: formData.description,
        products: formData.productsList,
        colors: formData.colors,
        style: formData.style,
        contact_name: formData.name,
        contact_info: formData.contactInfo,
        tier: formData.tier,
        notes: formData.extras,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      alert("Something went wrong. Try again.");
    } else {
      // Trigger email notification
      try {
        await fetch('/api/notify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (notifyError) {
        console.error("Notification error:", notifyError);
      }

      setSuccess(true);
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center', maxWidth: '600px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <CheckCircle size={64} color="var(--primary)" />
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Request Received!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '32px' }}>
          Awesome, {formData.name}! I&apos;ll review your info for <strong>{formData.businessName}</strong> and reach out within 3-5 days via {formData.contactInfo} with a complete functional site! Contact lizziemaea12@gmail.com with any questions.
        </p>
        <button className="btn btn-primary" onClick={() => window.location.href = '/'}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem' }}>Get Your Site</h1>
        <p style={{ fontSize: '1.1rem' }}>Tell me about your business. Let&apos;s make something awesome together!</p>
      </div>

      <div className="card" style={{ padding: '40px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          <section>
            <h3 style={{ borderBottom: '2px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>Business Info</h3>
            <div className="form-group">
              <label className="form-label">Business Name *</label>
              <input className="form-input" name="businessName" value={formData.businessName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">What do you sell? *</label>
              <input className="form-input" name="whatYouSell" value={formData.whatYouSell} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Short Description *</label>
              <textarea className="form-textarea" name="description" value={formData.description} onChange={handleChange} required />
            </div>
          </section>

          <section>
            <h3 style={{ borderBottom: '2px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>Products</h3>
            <div className="form-group">
              <label className="form-label">Products</label>
              <textarea className="form-textarea" name="productsList" value={formData.productsList} onChange={handleChange} />
            </div>
          </section>

          <section>
            <h3 style={{ borderBottom: '2px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>Design</h3>
            <div className="grid-cols-2">
              <div className="form-group">
                <label className="form-label">Colors</label>
                <input className="form-input" name="colors" value={formData.colors} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Style</label>
                <select className="form-select" name="style" value={formData.style} onChange={handleChange}>
                  <option value="fun">Fun</option>
                  <option value="minimal">Minimal</option>
                  <option value="bold">Bold</option>
                  <option value="aesthetic">Aesthetic</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <h3 style={{ borderBottom: '2px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>Contact</h3>
            <div className="grid-cols-2">
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input className="form-input" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email or Phone *</label>
                <input className="form-input" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />
              </div>
            </div>
          </section>

          <section>
            <h3 style={{ borderBottom: '2px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>Extras</h3>
            <div className="form-group">
              <label className="form-label">Tier</label>
              <select className="form-select" name="tier" value={formData.tier} onChange={handleChange}>
                <option value="free">Free</option>
                <option value="starter">Starter</option>
                <option value="pro">Pro</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Anything else?</label>
              <textarea className="form-textarea" name="extras" value={formData.extras} onChange={handleChange} />
            </div>
          </section>

          <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Request'} <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}