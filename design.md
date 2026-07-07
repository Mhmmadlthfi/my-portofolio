# Dokumentasi Desain Portfolio - Muhammad Lutfi Wahid

## **1. OVERVIEW DESAIN**

### **1.1 Tema Utama**
- **Gaya:** Modern Tech & Creative
- **Mood:** Professional, Futuristic, Interactive
- **Target Audience:** Recruiters, Tech Companies, Clients

### **1.2 Filosofi Desain**
- Minimalis dengan aksen bold
- Dark theme dengan highlight neon
- Interaksi halus dan meaningful animations
- Responsive & accessible design

## **2. COLOR PALETTE**

### **2.1 Warna Primer**
```css
/* Core Colors */
--color-dark: #0a0a0c;        /* Background utama */
--color-card: #161618;        /* Card/container background */
--color-neon: #ccff00;        /* Aksen utama (neon lime) */
```

### **2.2 Warna Sekunder**
```css
/* Text Colors */
--color-text-primary: #ffffff;
--color-text-secondary: rgba(255, 255, 255, 0.9);
--color-text-tertiary: #a1a1aa;
--color-text-muted: #71717a;

/* Utility Colors */
--color-border: rgba(255, 255, 255, 0.1);
--color-overlay: rgba(0, 0, 0, 0.5);
```

### **2.3 Gradients**
```css
/* Background Gradients */
.gradient-dark {
  background: linear-gradient(to bottom, transparent, var(--color-dark)/80);
}

.gradient-neon {
  background: linear-gradient(45deg, var(--color-neon), #00ff88);
}

/* Text Gradients */
.text-gradient-neon {
  background: linear-gradient(45deg, var(--color-neon), #00ff88);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

## **3. TYPOGRAPHY**

### **3.1 Font Families**
```css
/* Display Font - Untuk headings besar */
font-family: 'Syne', sans-serif;
Weights: 600 (Semibold), 700 (Bold), 800 (Extrabold)

/* Body Font - Untuk teks konten */
font-family: 'Inter', sans-serif;
Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold)
```

### **3.2 Scale Typography**
```css
/* Display Sizes */
--text-display-4xl: 9rem;      /* 144px */
--text-display-3xl: 7.5rem;    /* 120px */
--text-display-2xl: 6rem;      /* 96px */
--text-display-xl: 4.5rem;     /* 72px */
--text-display-lg: 3.75rem;    /* 60px */

/* Heading Sizes */
--text-4xl: 2.25rem;           /* 36px */
--text-3xl: 1.875rem;          /* 30px */
--text-2xl: 1.5rem;            /* 24px */
--text-xl: 1.25rem;            /* 20px */
--text-lg: 1.125rem;           /* 18px */

/* Body Sizes */
--text-base: 1rem;             /* 16px */
--text-sm: 0.875rem;           /* 14px */
--text-xs: 0.75rem;            /* 12px */
```

### **3.3 Tracking & Leading**
```css
/* Letter Spacing */
.tracking-tighter { letter-spacing: -0.05em; }
.tracking-tight { letter-spacing: -0.025em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.025em; }
.tracking-wider { letter-spacing: 0.05em; }
.tracking-widest { letter-spacing: 0.1em; }

/* Line Height */
.leading-none { line-height: 1; }
.leading-tight { line-height: 1.25; }
.leading-snug { line-height: 1.375; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.625; }
.leading-loose { line-height: 2; }
```

## **4. SPACING & LAYOUT**

### **4.1 Grid System**
```css
/* Container Widths */
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1536px; }
.container-full { max-width: 100rem; } /* 1600px */

/* Grid Columns */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
```

### **4.2 Spacing Scale**
```css
/* Padding & Margin */
.p-0 { padding: 0; }
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.p-10 { padding: 2.5rem; }
.p-12 { padding: 3rem; }
.p-14 { padding: 3.5rem; }
.p-16 { padding: 4rem; }
.p-20 { padding: 5rem; }
.p-24 { padding: 6rem; }

/* Responsive Padding */
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.px-12 { padding-left: 3rem; padding-right: 3rem; }

.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.py-24 { padding-top: 6rem; padding-bottom: 6rem; }
```

## **5. VISUAL EFFECTS**

### **5.1 Background Effects**
```css
/* Noise Texture */
.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}

/* Blur Effects */
.blur-sm { backdrop-filter: blur(4px); }
.blur-md { backdrop-filter: blur(8px); }
.blur-lg { backdrop-filter: blur(16px); }
.blur-xl { backdrop-filter: blur(24px); }
.blur-2xl { backdrop-filter: blur(40px); }
```

### **5.2 Glow & Shadow Effects**
```css
/* Neon Glow */
.neon-glow {
  box-shadow: 0 0 40px rgba(204, 255, 0, 0.15);
}

.neon-glow-strong {
  box-shadow: 0 0 60px rgba(204, 255, 0, 0.3);
}

/* Text Outline */
.text-outline {
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
}

.text-outline:hover {
  color: var(--color-neon);
  -webkit-text-stroke: 2px var(--color-neon);
  text-shadow: 0 0 30px rgba(204, 255, 0, 0.4);
}
```

### **5.3 Border & Glass Effects**
```css
/* Glass Morphism */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Border Styles */
.border-card {
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.border-neon {
  border: 1px solid rgba(204, 255, 0, 0.3);
}
```

## **6. ANIMATIONS & TRANSITIONS**

### **6.1 Transition Durations**
```css
/* Standard Durations */
.transition-fast { transition-duration: 150ms; }
.transition-normal { transition-duration: 300ms; }
.transition-slow { transition-duration: 500ms; }
.transition-very-slow { transition-duration: 700ms; }

/* Transition Properties */
.transition-all { transition-property: all; }
.transition-transform { transition-property: transform; }
.transition-opacity { transition-property: opacity; }
.transition-colors { transition-property: color, background-color, border-color; }
```

### **6.2 Custom Animations**
```css
/* Spin Slow Animation */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Pulse Animation */
@keyframes pulse-neon {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse-neon {
  animation: pulse-neon 2s ease-in-out infinite;
}

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### **6.3 Hover Effects**
```css
/* Scale Effects */
.hover-scale-105:hover { transform: scale(1.05); }
.hover-scale-110:hover { transform: scale(1.1); }

/* Rotation Effects */
.hover-rotate-3:hover { transform: rotate(3deg); }
.hover-rotate-6:hover { transform: rotate(6deg); }

/* Color Transitions */
.hover-text-neon:hover { color: var(--color-neon); }
.hover-bg-neon:hover { background-color: var(--color-neon); }
```

## **7. COMPONENT SPECIFICATIONS**

### **7.1 Navigation Bar**
- **Position:** Fixed top
- **Background:** Transparent dengan mix-blend-difference
- **Logo:** "LFW." dengan titik neon
- **Menu Items:** Uppercase dengan hover effect neon
- **CTA Button:** Border dengan hover bg neon

### **7.2 Home/Hero Section**
- **Layout:** Fullscreen dengan noise background
- **Name Display:** "Muhammad" (atas), "LUTFI" (besar dengan outline), "Wahid" (bawah)
- **Profile Image:** Rotated dengan neon glow dan hover effects
- **Interactive Elements:** Spinning circle SVG, title bottom-right

### **7.3 About Section**
- **Layout:** Grid 12-column dengan cards
- **Main Card:** Large dengan gradien blur effect
- **Stats Cards:** Numerical highlights dengan CTA
- **Skills Grid:** 4-column dengan progress bars

### **7.4 Experience Section**
- **Layout:** 2-column grid (Experience & Education)
- **Timeline:** Vertical dengan neon bullet points
- **Cards:** Border dengan skill tags
- **Typography:** Hierarchical dengan weight variations

### **7.5 Projects Section**
- **Layout:** 2-column responsive grid
- **Project Cards:** Image dengan overlay effects
- **Hover Effects:** Scale, grayscale removal, neon overlay
- **Typography:** Bold titles dengan gradient text

### **7.6 Contact Section**
- **Layout:** Centered dengan noise background
- **CTA:** Large neon button dengan glow effect
- **Social Links:** Circular border icons
- **Footer:** Minimal dengan copyright

## **8. RESPONSIVE BREAKPOINTS**

```css
/* Tailwind Default Breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */

/* Custom Breakpoints */
container-full: 1600px  /* Full width container */
```

## **9. ACCESSIBILITY GUIDELINES**

### **9.1 Color Contrast**
- Text-to-background ratio minimum 4.5:1
- Interactive elements clearly distinguishable
- Neon colors used sparingly for emphasis only

### **9.2 Keyboard Navigation**
- All interactive elements focusable
- Logical tab order
- Skip navigation link available

### **9.3 Screen Reader Support**
- Semantic HTML structure
- ARIA labels where necessary
- Proper heading hierarchy

## **10. PERFORMANCE OPTIMIZATION**

### **10.1 Image Optimization**
- WebP format dengan fallback
- Lazy loading untuk below-fold images
- Responsive image sizes

### **10.2 Animation Performance**
- CSS transforms instead of layout properties
- Will-change property for complex animations
- Reduced motion preferences respected

### **10.3 Bundle Optimization**
- Tree shaking untuk unused CSS
- Code splitting untuk routes
- Font subsetting untuk Google Fonts

---

**Versi:** 1.0  
**Terakhir Diperbarui:** 2026-07-07  
**Status:** Active - Redesign Phase