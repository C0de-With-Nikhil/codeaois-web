"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Shield, Palette, Bell, Save, Trash2, Camera } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API save call
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Profile updated successfully!");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Settings</h1>
        <p className="text-zinc-500 mt-1">Manage your account preferences and security.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Navigation */}
        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-3 px-4 py-2 bg-zinc-900 text-white rounded-xl text-sm font-medium">
            <User className="w-4 h-4 text-cyan-500" /> Profile
          </button>
          <button className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-white hover:bg-zinc-900/50 rounded-xl text-sm font-medium transition-colors">
            <Shield className="w-4 h-4" /> Security
          </button>
          <button className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-white hover:bg-zinc-900/50 rounded-xl text-sm font-medium transition-colors">
            <Palette className="w-4 h-4" /> Appearance
          </button>
          <button className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-white hover:bg-zinc-900/50 rounded-xl text-sm font-medium transition-colors">
            <Bell className="w-4 h-4" /> Notifications
          </button>
        </nav>

        {/* Main Settings Form */}
        <div className="lg:col-span-3 space-y-6">
          <form onSubmit={handleSave} className="bg-[#0A0A0A] border border-zinc-900 rounded-3xl p-8 space-y-8">
            
            {/* Avatar Section */}
            <div className="flex items-center gap-6 pb-6 border-b border-zinc-900">
              <div className="relative group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-2xl">
                  {name.charAt(0)}
                </div>
                <button type="button" className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-5 h-5 text-white" />
                </button>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Your Avatar</h3>
                <p className="text-xs text-zinc-500 mt-1">Click to upload a custom PNG or SVG.</p>
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Display Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-colors text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">GitHub Username</label>
                <input 
                  type="text" 
                  placeholder="@username"
                  className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-colors text-white text-zinc-500" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-zinc-400">Bio</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your development workflow..."
                  className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-colors text-white resize-none" 
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
              <button 
                type="submit" 
                disabled={isSaving}
                className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl font-bold hover:bg-zinc-200 transition-all disabled:opacity-50"
              >
                {isSaving ? "Saving..." : <><Save className="w-4 h-4" /> Save Changes</>}
              </button>
            </div>
          </form>

          {/* Danger Zone */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-red-500 font-bold flex items-center gap-2 mb-2">
              <Trash2 className="w-4 h-4" /> Danger Zone
            </h3>
            <p className="text-zinc-500 text-sm mb-6">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 px-4 py-2 rounded-xl text-sm font-bold transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}