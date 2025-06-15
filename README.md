# MatAstra Website - Complete Beginner's Guide

Welcome! This guide will help you understand and edit the MatAstra website, even if you've never worked with websites before.

## 🌟 What This Website Is

This is a **landing page** for MatAstra - a company that makes software for monitoring power grids. The website:
- Shows visitors what the company does
- Explains the key features and benefits
- Provides contact information
- Is designed to look professional and modern

## 🛠️ Technologies Used (Don't Worry - We'll Explain Everything!)

### 1. **Next.js** - The Foundation
Think of Next.js as the engine that powers the website. It's like the foundation of a house - you don't see it, but everything is built on top of it.

### 2. **React** - The Building Blocks  
React lets us build the website using components (like LEGO blocks). Each section of the website is a separate piece that we can modify independently.

### 3. **TypeScript** - Enhanced JavaScript
This is the programming language that makes the website interactive. The `.tsx` file extension means it's a TypeScript + React file.

### 4. **Tailwind CSS** - The Styling System
Instead of writing traditional CSS, we use Tailwind classes. Think of it like having pre-made style options:
- `text-xl` = extra large text
- `bg-blue-600` = blue background
- `p-4` = padding (space inside) of 16px
- `m-2` = margin (space outside) of 8px

## 📁 File Structure

```
src/
  app/
    page.tsx          ← This is the main homepage file (the one we added comments to)
    layout.tsx        ← Overall page structure (header, footer, etc.)
    globals.css       ← Global styles that apply to the whole site
README.md             ← This file you're reading now!
```

## 🎨 Understanding the Website Layout

The website is divided into **sections**, like chapters in a book:

1. **Header/Navigation** - The top bar with logo and menu
2. **Hero Section** - The big banner with main message
3. **Technology Section** - Explains the technical features
4. **Features Section** - Lists key benefits
5. **Solutions Section** - Describes how it helps customers
6. **Statistics Section** - Shows impressive numbers
7. **Contact Section** - How to get in touch

Each section is wrapped in a `<section>` tag in the code.

## ✏️ How to Make Common Edits

### Changing Text Content

**To change any text on the website:**

1. Find the text you want to change in `src/app/page.tsx`
2. Look for it between HTML tags like this:
   ```jsx
   <h1>Real-Time Power Grid Oscillation Monitoring</h1>
   <p>Innovative solutions for real-time PMU analysis...</p>
   ```
3. Simply replace the text between the tags
4. Save the file

**Example:** To change the main headline:
```jsx
// OLD:
<h1>Real-Time Power Grid Oscillation Monitoring</h1>

// NEW:
<h1>Advanced Power Grid Solutions</h1>
```

### Changing Colors

Colors in Tailwind follow this pattern: `color-intensity`

**Common colors:**
- `blue-600` (medium blue)
- `red-500` (medium red) 
- `green-400` (light green)
- `gray-800` (dark gray)
- `white` (white)

**To change a button color:**
```jsx
// OLD (blue button):
className="bg-blue-600 hover:bg-blue-700"

// NEW (green button):
className="bg-green-600 hover:bg-green-700"
```

### Changing Sizes and Spacing

**Text sizes:**
- `text-sm` = small
- `text-base` = normal  
- `text-lg` = large
- `text-xl` = extra large
- `text-2xl` = 2x extra large
- etc.

**Padding (space inside elements):**
- `p-2` = small padding
- `p-4` = medium padding
- `p-8` = large padding

**Margins (space outside elements):**
- `m-2` = small margin
- `m-4` = medium margin
- `m-8` = large margin

### Adding New Content

**To add a new feature in the Features section:**

1. Find the Features section (look for `{/* FEATURES SECTION */}`)
2. Copy one of the existing feature blocks:
   ```jsx
   <div className="flex gap-4 animate-fade-in-left">
     <div className="flex-shrink-0">
       <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
         <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
       </div>
     </div>
     <div>
       <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Your New Feature Title</h3>
       <p className="text-slate-600 dark:text-slate-400">
         Description of your new feature goes here.
       </p>
     </div>
   </div>
   ```
3. Change the title and description
4. Change the icon (see Icons section below)

## 🎯 Understanding Icons

Icons come from the **Lucide** library. At the top of the file, you'll see:
```jsx
import { Activity, AlertTriangle, Brain, ... } from "lucide-react";
```

**To use a different icon:**
1. Go to [lucide.dev](https://lucide.dev) to browse available icons
2. Add the icon name to the import statement
3. Use it like: `<NewIconName className="h-5 w-5" />`

**Example:**
```jsx
// Add to imports:
import { Star, Heart } from "lucide-react";

// Use in your code:
<Star className="h-5 w-5 text-blue-600" />
```

## 🌙 Dark Mode

The website automatically supports both light and dark themes! You'll see classes like:
- `text-slate-900 dark:text-white` = dark text in light mode, white text in dark mode
- `bg-white dark:bg-slate-900` = white background in light mode, dark background in dark mode

When adding new content, always include both light and dark versions.

## 📱 Responsive Design (Mobile-Friendly)

The website adapts to different screen sizes using prefixes:
- `sm:` = small screens (phones)
- `md:` = medium screens (tablets)  
- `lg:` = large screens (laptops)
- `xl:` = extra large screens (desktops)

**Example:**
```jsx
className="text-lg md:text-xl lg:text-2xl"
```
This means: large text on phones, extra-large on tablets, 2x extra-large on laptops+

## 🎨 Layout Concepts

### Flexbox (For Arranging Items)
- `flex` = arrange items in a row
- `flex-col` = arrange items in a column  
- `justify-center` = center items horizontally
- `items-center` = center items vertically
- `space-x-4` = add space between items horizontally
- `gap-4` = add space between all items

### Grid (For Complex Layouts)
- `grid` = create a grid layout
- `grid-cols-2` = 2 columns
- `md:grid-cols-3` = 3 columns on medium screens+
- `gap-8` = space between grid items

## 🚀 Making Your First Edit

Let's practice by changing the company tagline:

1. Open `src/app/page.tsx`
2. Find this line (around line 82):
   ```jsx
   Solving Real-World Power Grid Challenges
   ```
3. Change it to something else:
   ```jsx
   Your New Tagline Here
   ```
4. Save the file
5. The website will automatically update!

## 📞 Updating Contact Information

**To change the email address:**
1. Find `href="mailto:info@matastra.com"`
2. Replace with your email: `href="mailto:youremail@company.com"`
3. Also update the button text: `info@matastra.com` → `youremail@company.com`

**To change the phone number:**
1. Find `href="tel:608-588-6418"`
2. Replace with your number: `href="tel:555-123-4567"`
3. Also update the button text: `(608) 588-6418` → `(555) 123-4567`

## 🎯 Common Tasks

### Adding a New Section
1. Copy an existing section (everything from `<section>` to `</section>`)
2. Change the `id` attribute (e.g., `id="new-section"`)
3. Update the content inside
4. Add navigation link in the header

### Changing the Logo/Company Name
1. Find `MatAstra` in the header section
2. Replace with your company name
3. To change the lightning bolt icon, replace `<Zap>` with a different icon

### Updating Statistics
Find the Statistics section and change the numbers:
```jsx
<div className="text-4xl font-bold text-blue-600 dark:text-blue-500">99.9%</div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Uptime Reliability</p>
```

### Adding Animation
Most sections already have animations! Common ones:
- `animate-fade-in-up` = fades in from bottom
- `animate-fade-in-left` = slides in from left
- `animate-fade-in-right` = slides in from right
- `animation-delay-200` = starts animation 200ms later

## 🆘 Troubleshooting

**Website looks broken after editing?**
- Check that you didn't accidentally delete any `>`, `<`, or `"` characters
- Make sure every opening tag `<div>` has a closing tag `</div>`
- Undo your last change and try again

**Text not showing up?**
- Make sure the text is between HTML tags: `<p>Your text here</p>`
- Check that you didn't put text inside a `className` attribute

**Colors not working?**
- Use exact Tailwind color names: `bg-blue-600`, not `bg-lightblue`
- Don't forget the intensity number: `text-red-500`, not just `text-red`

## 📚 Learning Resources

**To learn more about these technologies:**

1. **HTML Basics**: [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. **Tailwind CSS**: [Official Documentation](https://tailwindcss.com/docs)
3. **React Basics**: [Official React Tutorial](https://react.dev/learn)
4. **Next.js**: [Official Next.js Tutorial](https://nextjs.org/learn)

**Quick Reference Sites:**
- [Tailwind Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)
- [Lucide Icons](https://lucide.dev)
- [HTML Color Codes](https://htmlcolorcodes.com/)

## 🎉 Tips for Success

1. **Make small changes** - Edit one thing at a time and test it
2. **Use the comments** - The code now has lots of comments explaining what each part does
3. **Copy and modify** - Instead of writing from scratch, copy existing sections and change them
4. **Keep backups** - Save copies of working versions before making big changes
5. **Ask for help** - If you get stuck, don't hesitate to ask a developer for assistance

## 🔄 Development Workflow

**To run the website locally:**
```bash
npm run dev
```

**To build for production:**
```bash
npm run build
```

Remember: This website is built with modern web technologies that make it fast, accessible, and search-engine friendly. Take your time learning, and don't be afraid to experiment!

---

**Happy editing! 🚀**

*If you make a mistake, you can always use your code editor's "Undo" feature (Ctrl+Z or Cmd+Z) to revert changes.*
