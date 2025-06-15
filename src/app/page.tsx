import Link from "next/link";
import { Activity, AlertTriangle, Brain, ChevronRight, Clock, Globe, Shield, Sparkles, Zap, TrendingUp, Database, Network, LineChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000" />
      </div>

      {/* HEADER/NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="#" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-20 blur-md group-hover:opacity-30 transition-opacity" />
                <Zap className="relative h-8 w-8 text-blue-600 dark:text-blue-500" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                MatAstra
              </span>
            </Link>
            
            {/* NAVIGATION MENU */}
            {/* This menu is hidden on mobile devices and shown on medium screens and larger */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* 
              NAV ELEMENT EXPLANATION:
              - <nav> is an HTML5 semantic element that represents navigation links
              - Screen readers and search engines understand this contains site navigation
              - Improves accessibility and SEO (Search Engine Optimization)
              
              BREAKDOWN OF NAV CLASSES:
              - hidden = display: none - completely hides the element
              - md:flex = on medium screens and up (768px+), display: flex
              - items-center = align-items: center - vertically centers all navigation items
              - space-x-8 = adds 32px horizontal space between each child element
              
              RESPONSIVE DESIGN STRATEGY:
              - Mobile-first approach: start with mobile layout (hidden)
              - Then add larger screen layouts with prefixes (md:, lg:, xl:)
              - This creates a clean mobile experience without cluttered navigation
              - On larger screens, there's room for full navigation menu
              
              BREAKPOINTS IN TAILWIND:
              - sm: 640px and up (small phones in landscape, tablets in portrait)
              - md: 768px and up (tablets in landscape, small laptops)
              - lg: 1024px and up (laptops, small desktops)
              - xl: 1280px and up (large desktops)
              - 2xl: 1536px and up (very large screens)
              */}
              
              {/* NAVIGATION LINKS - Each scrolls to a different section of the page */}
              {/* These are anchor links that scroll to sections with matching IDs */}
              
              {/* TECHNOLOGY LINK */}
              <Link href="#technology" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {/* 
                ANCHOR LINK EXPLANATION:
                - href="#technology" scrolls to element with id="technology"
                - The # symbol indicates a fragment identifier (anchor link)
                - Browser will smoothly scroll to that section
                - This is called "single-page navigation" - no page reload
                
                BREAKDOWN OF LINK CLASSES:
                - text-sm = font-size: 14px (small text)
                - font-medium = font-weight: 500 (medium weight, between normal and bold)
                - text-slate-600 = medium gray text color in light mode
                - dark:text-slate-300 = light gray text color in dark mode
                - hover:text-blue-600 = blue text color when hovered in light mode
                - dark:hover:text-blue-400 = lighter blue text color when hovered in dark mode
                - transition-colors = smoothly animates color changes
                
                HOVER STATES EXPLANATION:
                - :hover is a CSS pseudo-class that activates when user mouses over element
                - Provides visual feedback that element is interactive
                - Good UX (User Experience) practice to show hover states
                - Transition makes the color change smooth instead of instant
                */}
                Technology
                {/* The actual text that appears in the navigation */}
              </Link>
              
              {/* FEATURES LINK */}
              <Link href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {/* Same styling as Technology link - consistent design */}
                Features
              </Link>
              
              {/* SOLUTIONS LINK */}
              <Link href="#solutions" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Solutions
              </Link>
              
              {/* CONTACT LINK */}
              <Link href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
              
              {/* CALL-TO-ACTION BUTTON */}
              {/* This is styled as a button instead of a text link to draw attention */}
              <Link
                href="#demo"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {/* 
                CALL-TO-ACTION (CTA) BUTTON EXPLANATION:
                - CTA = most important action you want users to take
                - Styled prominently with background color and padding
                - Usually contrasts with regular navigation links
                
                BREAKDOWN OF BUTTON CLASSES:
                - inline-flex = display: inline-flex - flexible layout that stays inline with text
                - h-9 = height: 36px - fixed height for consistent button size
                - items-center = align-items: center - vertically centers button text
                - justify-center = justify-content: center - horizontally centers button text
                - rounded-lg = border-radius: 8px - rounded corners (lg = large rounding)
                - bg-blue-600 = background-color: medium blue
                - px-6 = padding-left: 24px, padding-right: 24px - horizontal padding
                - text-sm = font-size: 14px - small text
                - font-medium = font-weight: 500 - medium font weight
                - text-white = color: white - white text color
                - shadow-sm = box-shadow: small shadow - subtle drop shadow
                - transition-all = transitions all animatable properties
                - hover:bg-blue-700 = darker blue background on hover
                - hover:shadow-md = larger shadow on hover (creates "lifting" effect)
                - focus-visible:outline-none = removes default browser focus outline
                - focus-visible:ring-2 = adds custom focus ring (2px width)
                - focus-visible:ring-blue-500 = blue focus ring color
                
                ACCESSIBILITY FOCUS STATES:
                - focus-visible activates when keyboard users tab to the element
                - Important for accessibility - keyboard users need visual focus indicators
                - Custom focus ring is more attractive than browser default
                - Blue ring matches the button's color scheme
                
                BUTTON HOVER EFFECTS:
                - Darker background suggests button is "pressed down"
                - Larger shadow makes button appear to "lift up"
                - Creates tactile feedback even though it's digital
                - Makes interface feel more responsive and interactive
                */}
                Request Demo
                {/* Button text - clear action-oriented language */}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      {/* This contains all the page content below the header */}
      <main className="flex-1">
        {/* 
        MAIN ELEMENT EXPLANATION:
        - <main> is an HTML5 semantic element that represents the main content of the page
        - Should contain the primary content, excluding headers, footers, and navigation
        - Screen readers use this to jump to main content
        - SEO benefits - search engines know this is the important content
        
        FLEX-1 CLASS EXPLANATION:
        - flex-1 = flex: 1 1 0% - flex grow, shrink, and basis values
        - flex-grow: 1 = takes up remaining space in flex container
        - flex-shrink: 1 = can shrink if needed
        - flex-basis: 0% = initial size before free space is distributed
        - This makes main content fill remaining space after header
        */}
        
        {/* HERO SECTION - The main banner at the top of the page */}
        {/* This is the first thing visitors see - most important section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          {/* 
          SECTION ELEMENT EXPLANATION:
          - <section> is an HTML5 semantic element that represents a thematic grouping of content
          - Each section should have a heading and related content
          - Helps organize page structure for accessibility and SEO
          
          BREAKDOWN OF HERO SECTION CLASSES:
          - relative = CSS position: relative - allows absolute positioning of child elements
          - w-full = width: 100% - takes full width of parent container
          - py-20 = padding-top: 80px, padding-bottom: 80px - vertical padding
          - md:py-32 = on medium screens+, padding-top: 128px, padding-bottom: 128px
          - lg:py-40 = on large screens+, padding-top: 160px, padding-bottom: 160px
          - overflow-hidden = if content goes outside this container, hide it
          
          RESPONSIVE PADDING STRATEGY:
          - More padding on larger screens creates better proportions
          - Mobile: 80px top/bottom (py-20)
          - Tablet: 128px top/bottom (md:py-32)
          - Desktop: 160px top/bottom (lg:py-40)
          - Gives content room to breathe on larger screens
          */}
          
          {/* CONTAINER FOR CENTERING CONTENT */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Same container pattern as header - consistent spacing throughout site */}
            
            {/* GRID LAYOUT - 2 columns on large screens, 1 column on smaller screens */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* 
              CSS GRID EXPLANATION:
              - CSS Grid is a 2-dimensional layout system (rows and columns)
              - Different from Flexbox which is 1-dimensional
              - Perfect for complex layouts like this hero section
              
              BREAKDOWN OF GRID CLASSES:
              - grid = display: grid - creates grid container
              - gap-12 = gap: 48px - space between grid items (both row and column)
              - lg:grid-cols-2 = on large screens+, grid-template-columns: repeat(2, minmax(0, 1fr))
                - Creates 2 equal columns that share available space
              - lg:gap-16 = on large screens+, gap: 64px - more space between columns
              - items-center = align-items: center - vertically centers grid items
              
              RESPONSIVE GRID STRATEGY:
              - Mobile/Tablet: Single column (stacked vertically)
              - Desktop: Two columns (side by side)
              - Content reflows automatically based on screen size
              */}
              
              {/* LEFT COLUMN - Text content */}
              <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
                {/* 
                BREAKDOWN OF TEXT COLUMN CLASSES:
                - flex = display: flex - creates flexible container
                - flex-col = flex-direction: column - stacks children vertically
                - justify-center = justify-content: center - centers content along main axis (vertical)
                - space-y-8 = adds 32px vertical margin between child elements
                - animate-fade-in-up = custom animation class that fades in from bottom
                
                ANIMATION EXPLANATION:
                - Animations create visual interest and guide user attention
                - "Fade in from bottom" is common for hero content
                - Makes content appear to "slide up" into view
                - Should be subtle and not distracting
                */}
                
                {/* SMALL BADGE/PILL AT THE TOP */}
                <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 w-fit">
                  {/* 
                  BADGE/PILL COMPONENT EXPLANATION:
                  - Small promotional or informational element
                  - Draws attention to key messaging
                  - Often used to highlight new features or benefits
                  
                  BREAKDOWN OF BADGE CLASSES:
                  - inline-flex = display: inline-flex - flexible layout that doesn't take full width
                  - items-center = align-items: center - vertically centers icon and text
                  - rounded-full = border-radius: 9999px - creates pill/capsule shape
                  - border = border-width: 1px - adds border
                  - border-blue-200 = light blue border in light mode
                  - dark:border-blue-900 = dark blue border in dark mode
                  - bg-blue-50 = very light blue background in light mode
                  - dark:bg-blue-950/50 = very dark blue background with 50% opacity in dark mode
                  - px-3 = padding-left: 12px, padding-right: 12px - horizontal padding
                  - py-1 = padding-top: 4px, padding-bottom: 4px - vertical padding
                  - text-sm = font-size: 14px - small text
                  - text-blue-700 = dark blue text in light mode
                  - dark:text-blue-300 = light blue text in dark mode
                  - w-fit = width: fit-content - only as wide as needed
                  
                  OPACITY NOTATION:
                  - /50 after a color means 50% opacity
                  - bg-blue-950/50 = blue-950 color with 50% transparency
                  - Useful for subtle background effects
                  */}
                  
                  {/* SPARKLES ICON */}
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  {/* 
                  ICON CLASSES:
                  - mr-2 = margin-right: 8px - space between icon and text
                  - h-3.5 = height: 14px - small icon size
                  - w-3.5 = width: 14px - matches height for square aspect ratio
                  
                  ICON SIZE STRATEGY:
                  - Small icons (h-3, h-4) for badges and inline elements
                  - Medium icons (h-5, h-6) for buttons and list items
                  - Large icons (h-8, h-12) for features and hero sections
                  */}
                  
                  Solving Real-World Power Grid Challenges
                  {/* Badge text - short, compelling message */}
                </div>
                
                {/* MAIN HEADING AND DESCRIPTION */}
                <div className="space-y-4">
                  {/* 
                  CONTENT GROUPING:
                  - space-y-4 = 16px vertical space between heading and paragraph
                  - Groups related content together
                  - Creates visual hierarchy
                  */}
                  
                  {/* LARGE MAIN HEADLINE */}
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-slate-900 dark:text-white">
                    {/* 
                    H1 ELEMENT EXPLANATION:
                    - <h1> is the most important heading on the page
                    - Should only have one per page for SEO
                    - Screen readers use this to understand page structure
                    - Search engines give high importance to H1 content
                    
                    BREAKDOWN OF HEADING CLASSES:
                    - text-4xl = font-size: 36px - large text size
                    - font-bold = font-weight: 700 - bold text
                    - tracking-tight = letter-spacing: -0.025em - slightly compressed letters
                    - sm:text-5xl = on small screens+, font-size: 48px
                    - xl:text-6xl/none = on extra large screens+, font-size: 60px with line-height: 1
                    - text-slate-900 = very dark gray text in light mode
                    - dark:text-white = white text in dark mode
                    
                    TYPOGRAPHY SCALING:
                    - Mobile: 36px (text-4xl)
                    - Small screens: 48px (sm:text-5xl)
                    - Extra large: 60px (xl:text-6xl)
                    - Ensures readability across all devices
                    
                    TRACKING (LETTER SPACING):
                    - Large text often needs tighter letter spacing
                    - tracking-tight makes large headings look more polished
                    - Improves readability at larger sizes
                    
                    LINE HEIGHT NOTATION:
                    - text-6xl/none = font-size: 60px with line-height: 1
                    - /none sets line-height to 1 (no extra space between lines)
                    - Useful for large headings to prevent too much vertical space
                    */}
                    
                    Real-Time Power Grid <span className="text-blue-600 dark:text-blue-500">Oscillation Monitoring</span>
                    {/* 
                    SPAN FOR EMPHASIS:
                    - <span> allows styling part of the text differently
                    - Blue color draws attention to key term
                    - Creates visual interest in the headline
                    - text-blue-600 = medium blue in light mode
                    - dark:text-blue-500 = slightly lighter blue in dark mode
                    */}
                  </h1>
                  
                  {/* SUBTITLE/DESCRIPTION PARAGRAPH */}
                  <p className="max-w-[600px] text-lg text-slate-600 dark:text-slate-400">
                    {/* 
                    PARAGRAPH ELEMENT:
                    - <p> represents a paragraph of text
                    - Semantic element that screen readers understand
                    
                    BREAKDOWN OF PARAGRAPH CLASSES:
                    - max-w-[600px] = max-width: 600px - limits line length for readability
                    - text-lg = font-size: 18px - larger than default text
                    - text-slate-600 = medium gray text in light mode
                    - dark:text-slate-400 = light gray text in dark mode
                    
                    ARBITRARY VALUE NOTATION:
                    - [600px] is an arbitrary value in Tailwind
                    - When standard utilities don't fit, use [exact-value]
                    - max-w-[600px] sets exact max-width of 600px
                    
                    OPTIMAL LINE LENGTH:
                    - 45-75 characters per line is ideal for readability
                    - 600px width typically achieves this
                    - Prevents lines from being too long on wide screens
                    */}
                    
                    Innovative solutions for real-time PMU analysis. Prevent blackouts before they happen with advanced multi-channel signal processing and AI-powered predictions.
                    {/* Compelling description that explains the value proposition */}
                  </p>
                </div>
                
                {/* CALL-TO-ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* 
                  BUTTON CONTAINER EXPLANATION:
                  - Groups related action buttons together
                  - flex = display: flex - arranges buttons in flexible layout
                  - flex-col = flex-direction: column - stacks buttons vertically by default
                  - sm:flex-row = on small screens+, flex-direction: row - arranges buttons horizontally
                  - gap-4 = gap: 16px - space between buttons
                  
                  RESPONSIVE BUTTON LAYOUT:
                  - Mobile: Buttons stacked vertically (easier to tap)
                  - Small screens+: Buttons side by side (saves vertical space)
                  - Adapts to user's device for optimal experience
                  */}
                  
                  {/* PRIMARY BUTTON */}
                  <Link
                    href="#demo"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {/* 
                    PRIMARY BUTTON DESIGN:
                    - Most important action on the page
                    - Prominent styling with solid background color
                    - Higher visual weight than secondary button
                    
                    BREAKDOWN OF PRIMARY BUTTON CLASSES:
                    - inline-flex = display: inline-flex - flexible inline container
                    - h-11 = height: 44px - comfortable touch target size
                    - items-center = align-items: center - vertically centers content
                    - justify-center = justify-content: center - horizontally centers content
                    - rounded-lg = border-radius: 8px - rounded corners
                    - bg-blue-600 = background-color: medium blue
                    - px-8 = padding-left: 32px, padding-right: 32px - horizontal padding
                    - text-sm = font-size: 14px - readable text size
                    - font-medium = font-weight: 500 - medium font weight for clarity
                    - text-white = color: white - high contrast against blue background
                    - shadow-sm = box-shadow: small shadow - subtle depth
                    - transition-all = transition: all 0.15s ease-in-out - smooth animations
                    - hover:bg-blue-700 = darker blue on hover (visual feedback)
                    - hover:shadow-md = larger shadow on hover (lifting effect)
                    - focus-visible:outline-none = removes default focus outline
                    - focus-visible:ring-2 = adds 2px focus ring
                    - focus-visible:ring-blue-500 = blue focus ring color
                    
                    TOUCH TARGET SIZE:
                    - 44px height meets minimum touch target recommendations
                    - Apple: 44px minimum, Google: 48px recommended
                    - Ensures buttons are easy to tap on mobile devices
                    */}
                    
                    Schedule Demo
                    {/* Clear, action-oriented button text */}
                    
                    {/* CHEVRON RIGHT ICON */}
                    <ChevronRight className="ml-2 h-4 w-4" />
                    {/* 
                    ICON IN BUTTON:
                    - ml-2 = margin-left: 8px - space between text and icon
                    - h-4 w-4 = 16px x 16px - appropriate size for button
                    - ChevronRight suggests forward movement/progression
                    - Common UX pattern for "next step" or "continue" actions
                    */}
                  </Link>
                  
                  {/* SECONDARY BUTTON */}
                  <Link
                    href="#features"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  >
                    {/* 
                    SECONDARY BUTTON DESIGN:
                    - Less prominent than primary button
                    - Provides alternative action
                    - Uses border + background instead of solid color
                    
                    BREAKDOWN OF SECONDARY BUTTON CLASSES:
                    - Same layout classes as primary button (h-11, inline-flex, etc.)
                    - border = border-width: 1px - adds border
                    - border-slate-300 = light gray border in light mode
                    - dark:border-slate-700 = dark gray border in dark mode
                    - bg-white = white background in light mode
                    - dark:bg-slate-900 = dark gray background in dark mode
                    - text-slate-700 = dark gray text in light mode
                    - dark:text-slate-300 = light gray text in dark mode
                    - hover:bg-slate-50 = very light gray background on hover in light mode
                    - dark:hover:bg-slate-800 = darker gray background on hover in dark mode
                    - focus-visible:ring-slate-400 = gray focus ring (matches button style)
                    
                    BUTTON HIERARCHY:
                    - Primary: Solid background, high contrast
                    - Secondary: Border + background, lower contrast
                    - Creates clear visual hierarchy of actions
                    - Users naturally focus on primary button first
                    */}
                    
                    Explore Features
                    {/* Secondary action text - exploratory rather than committal */}
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none animate-fade-in">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Network className="h-32 w-32 text-slate-300 dark:text-slate-700 mb-4 mx-auto animate-pulse-slow" />
                      <p className="text-slate-500 dark:text-slate-600 text-sm">Power Grid Visualization Placeholder</p>
                    </div>
                  </div>
                  <div className="absolute top-10 left-10 h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                  <div className="absolute top-20 right-20 h-2 w-2 rounded-full bg-indigo-500 animate-ping animation-delay-2000" />
                  <div className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-blue-500 animate-ping animation-delay-4000" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        {/* This section explains the technical capabilities and features */}
        <section id="technology" className="w-full py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          {/* 
          SECTION ID EXPLANATION:
          - id="technology" creates an anchor point for navigation
          - When users click nav link with href="#technology", browser scrolls here
          - IDs must be unique on the page
          - Good for single-page navigation and bookmarking
          
          SECTION STYLING EXPLANATION:
          - w-full = width: 100% - takes full width of parent
          - py-20 = padding-top: 80px, padding-bottom: 80px - vertical padding
          - md:py-28 = on medium screens+, padding-top: 112px, padding-bottom: 112px
          - border-t = border-top-width: 1px - top border to separate sections
          - border-slate-200 = light gray border in light mode
          - dark:border-slate-800 = dark gray border in dark mode
          - bg-slate-50/50 = very light gray background with 50% opacity in light mode
          - dark:bg-slate-900/50 = very dark gray background with 50% opacity in dark mode
          
          ALTERNATING SECTION BACKGROUNDS:
          - Hero: White background
          - Technology: Light gray background
          - Features: White background
          - Solutions: Light gray background
          - Creates visual separation between sections
          - Helps users understand content groupings
          
          SECTION PADDING SCALING:
          - Mobile: 80px vertical padding (py-20)
          - Medium screens+: 112px vertical padding (md:py-28)
          - More breathing room on larger screens
          - Maintains good proportions across devices
          */}
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Same container pattern - consistent spacing throughout site */}
            
            {/* SECTION HEADER */}
            <div className="flex flex-col items-center text-center mb-12">
              {/* 
              SECTION HEADER PATTERN:
              - Used consistently across all sections
              - flex flex-col = vertical stacking of header elements
              - items-center = horizontally centers all header content
              - text-center = centers text alignment
              - mb-12 = margin-bottom: 48px - space below header before content
              
              CONTENT HIERARCHY:
              1. Small badge/pill (context)
              2. Large heading (main message)
              3. Description paragraph (supporting details)
              This pattern is repeated throughout the site for consistency
              */}
              
              {/* SECTION BADGE */}
              <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                {/* Same badge styling as hero section - consistent design language */}
                
                <Brain className="mr-2 h-3.5 w-3.5" />
                {/* 
                BRAIN ICON:
                - Represents intelligence, AI, advanced technology
                - Appropriate for "Advanced Technology" context
                - mr-2 = margin-right: 8px - space between icon and text
                - h-3.5 w-3.5 = 14px x 14px - small size for badge
                */}
                
                Advanced Technology
                {/* Badge text that provides context for the section */}
              </div>
              
              {/* SECTION HEADING */}
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                {/* 
                H2 ELEMENT EXPLANATION:
                - <h2> is second-level heading (after <h1>)
                - Creates proper heading hierarchy for accessibility
                - Screen readers use heading levels to navigate content
                - SEO: Search engines understand content structure
                
                HEADING TYPOGRAPHY SCALING:
                - text-3xl = font-size: 30px - base size
                - sm:text-4xl = on small screens+, font-size: 36px
                - md:text-5xl = on medium screens+, font-size: 48px
                - Progressive scaling for different screen sizes
                - Ensures headings are prominent but not overwhelming
                
                OTHER HEADING CLASSES:
                - font-bold = font-weight: 700 - bold text
                - tracking-tight = letter-spacing: -0.025em - tighter letter spacing
                - text-slate-900 = very dark gray in light mode
                - dark:text-white = white in dark mode
                */}
                
                Cutting-Edge PMU Analysis
                {/* Section heading that summarizes the content focus */}
              </h2>
              
              {/* SECTION DESCRIPTION */}
              <p className="mt-4 max-w-[700px] text-slate-600 dark:text-slate-400 text-lg">
                {/* 
                DESCRIPTION PARAGRAPH:
                - mt-4 = margin-top: 16px - space above paragraph
                - max-w-[700px] = max-width: 700px - limits line length for readability
                - text-slate-600 = medium gray in light mode
                - dark:text-slate-400 = light gray in dark mode
                - text-lg = font-size: 18px - larger than body text for emphasis
                
                CONTENT HIERARCHY:
                - Badge: Smallest, provides context
                - Heading: Largest, main message
                - Description: Medium, supporting details
                */}
                
                Leverage state-of-the-art technology to capture power system dynamics and identify potential issues in real-time.
                {/* Description that expands on the heading */}
              </p>
            </div>
            
            {/* TECHNOLOGY FEATURES GRID */}
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* 
              FEATURES GRID EXPLANATION:
              - mx-auto = margin-left: auto, margin-right: auto - centers the grid
              - grid = display: grid - creates CSS grid container
              - max-w-6xl = max-width: 1152px - limits grid width on very large screens
              - gap-8 = gap: 32px - space between grid items
              - md:grid-cols-2 = on medium screens+, 2 columns
              - lg:grid-cols-3 = on large screens+, 3 columns
              
              RESPONSIVE GRID STRATEGY:
              - Mobile: 1 column (default, not specified)
              - Medium screens: 2 columns (tablets)
              - Large screens: 3 columns (desktops)
              - Content automatically reflows based on screen size
              
              GRID VS FLEXBOX:
              - Grid: Better for 2D layouts (rows and columns)
              - Flexbox: Better for 1D layouts (single row or column)
              - Grid gives more control over item placement
              */}
              
              {/* TECHNOLOGY FEATURE CARD 1 */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
                {/* 
                FEATURE CARD EXPLANATION:
                - Cards are a common UI pattern for displaying related information
                - Each card is self-contained and scannable
                - Consistent structure makes content predictable
                
                BREAKDOWN OF CARD CLASSES:
                - group = enables group hover effects (parent hover affects children)
                - relative = CSS position: relative - allows absolute positioning of children
                - overflow-hidden = clips content to card boundaries (important for rounded corners)
                - rounded-xl = border-radius: 12px - large rounded corners
                - border = border-width: 1px - subtle border
                - border-slate-200 = light gray border in light mode
                - dark:border-slate-800 = dark gray border in dark mode
                - bg-white = white background in light mode
                - dark:bg-slate-900 = dark gray background in dark mode
                - p-8 = padding: 32px - internal spacing on all sides
                - transition-all = transition: all 0.15s ease-in-out - smooth animations
                - hover:shadow-lg = large shadow on hover
                - hover:-translate-y-1 = moves up 4px on hover
                - animate-fade-in-up = custom animation that fades in from bottom
                
                CARD HOVER EFFECTS:
                - Shadow increase suggests card is "lifting"
                - Upward movement reinforces lifting metaphor
                - Creates tactile feedback for interactive elements
                - Subtle but engaging micro-interaction
                */}
                
                {/* CARD ICON CONTAINER */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  {/* 
                  ICON CONTAINER EXPLANATION:
                  - Consistent icon treatment across all cards
                  - Creates visual hierarchy and brand consistency
                  
                  BREAKDOWN OF ICON CONTAINER CLASSES:
                  - mb-4 = margin-bottom: 16px - space below icon
                  - inline-flex = display: inline-flex - flexible inline container
                  - h-12 w-12 = height: 48px, width: 48px - square container
                  - items-center = align-items: center - vertically centers icon
                  - justify-center = justify-content: center - horizontally centers icon
                  - rounded-lg = border-radius: 8px - rounded corners
                  - bg-blue-100 = very light blue background in light mode
                  - dark:bg-blue-950 = very dark blue background in dark mode
                  - text-blue-600 = medium blue icon color in light mode
                  - dark:text-blue-400 = lighter blue icon color in dark mode
                  
                  ICON BACKGROUND STRATEGY:
                  - Light background with darker icon in light mode
                  - Dark background with lighter icon in dark mode
                  - Ensures good contrast in both modes
                  - Brand colors reinforce visual identity
                  */}
                  
                  <Activity className="h-6 w-6" />
                  {/* 
                  ACTIVITY ICON:
                  - Represents real-time monitoring and analysis
                  - h-6 w-6 = 24px x 24px - medium icon size
                  - Appropriate size for card context
                  */}
                </div>
                
                {/* CARD TITLE */}
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Real-Time Mode-Shape Extraction</h3>
                {/* 
                H3 ELEMENT EXPLANATION:
                - <h3> is third-level heading
                - Maintains proper heading hierarchy (h1 > h2 > h3)
                - Important for accessibility and SEO
                
                CARD TITLE STYLING:
                - mb-2 = margin-bottom: 8px - small space below title
                - text-xl = font-size: 20px - prominent but not overwhelming
                - font-bold = font-weight: 700 - bold for emphasis
                - text-slate-900 = very dark gray in light mode
                - dark:text-white = white in dark mode
                */}
                
                {/* CARD DESCRIPTION */}
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {/* 
                  CARD DESCRIPTION STYLING:
                  - text-sm = font-size: 14px - smaller than body text
                  - text-slate-600 = medium gray in light mode
                  - dark:text-slate-400 = light gray in dark mode
                  - Lower visual weight than title
                  - Provides supporting details
                  */}
                  
                  Advanced algorithms extract critical mode shapes from PMU data streams in real-time, enabling instant system health assessment.
                  {/* Technical description of the feature */}
                </p>
              </div>
              
              {/* TECHNOLOGY FEATURE CARD 2 */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up animation-delay-200">
                {/* 
                ANIMATION DELAY:
                - animation-delay-200 = delays animation by 200ms
                - Creates staggered animation effect
                - Cards appear to "cascade" into view
                - More engaging than simultaneous animations
                */}
                
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <LineChart className="h-6 w-6" />
                  {/* LineChart icon represents data analysis and signal processing */}
                </div>
                
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Multi-Channel Signal Analysis</h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Simultaneously analyze multiple PMU channels to detect correlations and patterns invisible to traditional monitoring systems.
                </p>
              </div>
              
              {/* TECHNOLOGY FEATURE CARD 3 */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up animation-delay-400">
                {/* animation-delay-400 = delays animation by 400ms (further staggering) */}
                
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <Brain className="h-6 w-6" />
                  {/* Brain icon represents AI and machine learning capabilities */}
                </div>
                
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Unsupervised AI Insights</h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Machine learning models provide autonomous insights without manual configuration, adapting to your grid's unique characteristics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO DEMONSTRATION SECTION */}
        {/* This section showcases the software in action through video */}
        <section className="w-full py-20 md:py-28 bg-white dark:bg-slate-950">
          {/* 
          VIDEO SECTION EXPLANATION:
          - Dedicated section for demonstrating the software visually
          - Video is one of the most engaging content types
          - Shows actual product functionality better than text descriptions
          - Builds trust by showing real software in action
          
          SECTION STYLING:
          - w-full = width: 100% - full width section
          - py-20 = padding-top: 80px, padding-bottom: 80px - vertical spacing
          - md:py-28 = on medium screens+, padding-top: 112px, padding-bottom: 112px
          - bg-white = white background in light mode
          - dark:bg-slate-950 = very dark background in dark mode
          - Alternates with Technology section's gray background
          */}
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Same container pattern for consistent site-wide spacing */}
            
            {/* SECTION HEADER */}
            <div className="flex flex-col items-center text-center mb-16">
              {/* 
              SECTION HEADER STRUCTURE:
              - Consistent with other sections (badge + title + description)
              - mb-16 = margin-bottom: 64px - extra space before video (larger than text sections)
              - Video needs more breathing room than text content
              */}
              
              {/* SECTION BADGE */}
              <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                {/* Same badge styling pattern as other sections */}
                
                <Globe className="mr-2 h-3.5 w-3.5" />
                {/* 
                GLOBE ICON:
                - Represents live demonstration, real-world application
                - mr-2 = margin-right: 8px - space between icon and text
                - h-3.5 w-3.5 = 14px x 14px - consistent badge icon size
                */}
                
                Live Demo
                {/* Badge text indicating this shows actual software */}
              </div>
              
              {/* SECTION HEADING */}
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                {/* Same heading styling pattern as other sections */}
                
                See Our Software in Action
                {/* Clear, action-oriented heading */}
              </h2>
              
              {/* SECTION DESCRIPTION */}
              <p className="mt-4 max-w-[700px] text-slate-600 dark:text-slate-400 text-lg">
                {/* Same description styling pattern as other sections */}
                
                Watch how MatAstra's real-time monitoring system detects power grid oscillations and prevents potential blackouts before they occur.
                {/* Description that sets expectations for the video content */}
              </p>
            </div>
            
            {/* VIDEO CONTAINER */}
            <div className="mx-auto max-w-5xl">
              {/* 
              VIDEO CONTAINER EXPLANATION:
              - mx-auto = margin-left: auto, margin-right: auto - centers the video
              - max-w-5xl = max-width: 1024px - limits video width on very large screens
              - Prevents video from becoming too large on wide monitors
              - 1024px is optimal for video viewing without losing quality
              */}
              
              {/* VIDEO PLAYER WRAPPER */}
              <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-2xl">
                {/* 
                VIDEO WRAPPER EXPLANATION:
                - Contains the actual video player and maintains aspect ratio
                - Important for responsive video that doesn't break layout
                
                BREAKDOWN OF VIDEO WRAPPER CLASSES:
                - relative = CSS position: relative - allows absolute positioning of children
                - aspect-video = aspect-ratio: 16/9 - maintains 16:9 video aspect ratio
                - overflow-hidden = clips content to rounded corners
                - rounded-xl = border-radius: 12px - large rounded corners
                - border = border-width: 1px - subtle border around video
                - border-slate-200 = light gray border in light mode
                - dark:border-slate-800 = dark gray border in dark mode
                - bg-slate-100 = light gray background (shows while video loads)
                - dark:bg-slate-800 = dark gray background in dark mode
                - shadow-2xl = box-shadow: very large shadow - creates strong depth
                
                ASPECT RATIO EXPLANATION:
                - aspect-video = 16:9 aspect ratio (standard for modern video)
                - Prevents layout shift when video loads
                - Container height automatically adjusts based on width
                - 16:9 is optimal for web video (YouTube, Vimeo standard)
                
                WHY ASPECT RATIO MATTERS:
                - Prevents "jumping" layout when video loads
                - Maintains consistent spacing regardless of video dimensions
                - Looks professional and polished
                - Works across all device sizes
                */}
                
                {/* PLACEHOLDER VIDEO CONTENT */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* 
                  PLACEHOLDER CONTAINER:
                  - absolute inset-0 = covers entire video wrapper
                  - flex items-center justify-center = perfect centering
                  - Contains placeholder content until real video is added
                  */}
                  
                  <div className="text-center">
                    {/* Centers placeholder content */}
                    
                    {/* PLAY BUTTON ICON */}
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors cursor-pointer">
                      {/* 
                      PLAY BUTTON EXPLANATION:
                      - Large, prominent play button that users expect to see
                      - Visual cue that this is interactive video content
                      
                      BREAKDOWN OF PLAY BUTTON CLASSES:
                      - mx-auto = margin-left: auto, margin-right: auto - centers horizontally
                      - mb-6 = margin-bottom: 24px - space below play button
                      - flex = display: flex - flexible container for centering icon
                      - h-20 w-20 = height: 80px, width: 80px - large touch-friendly size
                      - items-center justify-center = centers the play icon inside button
                      - rounded-full = border-radius: 50% - perfect circle
                      - bg-blue-600 = medium blue background (brand color)
                      - text-white = white icon color (high contrast)
                      - shadow-lg = large shadow for depth
                      - hover:bg-blue-700 = darker blue on hover (interactive feedback)
                      - transition-colors = smooth color transition on hover
                      - cursor-pointer = changes cursor to pointer (indicates clickable)
                      
                      PLAY BUTTON SIZE:
                      - 80px (h-20 w-20) meets touch target guidelines
                      - Large enough to be easily clickable on mobile
                      - Visually prominent without overwhelming other content
                      */}
                      
                      {/* PLAY TRIANGLE ICON */}
                      <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        {/* 
                        PLAY ICON EXPLANATION:
                        - SVG (Scalable Vector Graphics) for crisp rendering at any size
                        - h-8 w-8 = 32px x 32px - appropriate size for 80px button
                        - ml-1 = margin-left: 4px - slight offset to visually center triangle
                        - fill="currentColor" = uses parent's text color (white)
                        - viewBox="0 0 24 24" = SVG coordinate system
                        
                        VISUAL CENTERING:
                        - Play triangle is not perfectly centered geometrically
                        - ml-1 offset makes it appear visually centered
                        - This is a common design technique for triangular shapes
                        */}
                        
                        <path d="M8 5v14l11-7z"/>
                        {/* 
                        SVG PATH EXPLANATION:
                        - <path> defines the shape of the play triangle
                        - d="M8 5v14l11-7z" is SVG path data
                        - M8 5 = move to coordinate (8,5)
                        - v14 = vertical line down 14 units
                        - l11-7 = line to point 11 units right, 7 units up
                        - z = close the path (back to starting point)
                        - Creates classic right-pointing triangle play button
                        */}
                      </svg>
                    </div>
                    
                    {/* PLACEHOLDER TITLE */}
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {/* 
                      PLACEHOLDER TITLE STYLING:
                      - text-xl = font-size: 20px - prominent but not overwhelming
                      - font-semibold = font-weight: 600 - medium bold weight
                      - mb-2 = margin-bottom: 8px - small space below title
                      - text-slate-900 = very dark gray in light mode
                      - dark:text-white = white in dark mode
                      */}
                      
                      MatAstra Dashboard Demo
                      {/* Descriptive title for the video content */}
                    </h3>
                    
                    {/* PLACEHOLDER DESCRIPTION */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
                      {/* 
                      PLACEHOLDER DESCRIPTION STYLING:
                      - text-slate-600 = medium gray in light mode
                      - dark:text-slate-400 = light gray in dark mode
                      - text-sm = font-size: 14px - smaller than title
                      - max-w-md = max-width: 448px - limits line length
                      - mx-auto = centers the text block
                      */}
                      
                      Watch a live demonstration of real-time PMU data analysis and oscillation detection in action.
                      {/* Brief description of what users will see in the video */}
                    </p>
                    
                    {/* VIDEO DURATION BADGE */}
                    <div className="inline-flex items-center mt-4 px-3 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded-full">
                      {/* 
                      DURATION BADGE EXPLANATION:
                      - Shows expected video length to set user expectations
                      - Helps users decide if they have time to watch
                      
                      BREAKDOWN OF DURATION BADGE CLASSES:
                      - inline-flex = display: inline-flex - flexible inline container
                      - items-center = align-items: center - vertically centers content
                      - mt-4 = margin-top: 16px - space above badge
                      - px-3 = padding-left: 12px, padding-right: 12px - horizontal padding
                      - py-1 = padding-top: 4px, padding-bottom: 4px - vertical padding
                      - bg-slate-800 = dark gray background in light mode
                      - dark:bg-slate-700 = slightly lighter gray in dark mode
                      - text-white = white text (high contrast against dark background)
                      - text-xs = font-size: 12px - very small text
                      - rounded-full = border-radius: 9999px - pill shape
                      */}
                      
                      <Clock className="h-3 w-3 mr-1" />
                      {/* 
                      CLOCK ICON:
                      - h-3 w-3 = 12px x 12px - very small icon for badge
                      - mr-1 = margin-right: 4px - small space between icon and text
                      */}
                      
                      3:24 Demo
                      {/* Placeholder duration - shows this is a focused, concise demo */}
                    </div>
                  </div>
                </div>
                
                {/* ACTUAL VIDEO ELEMENT (Currently Hidden/Placeholder) */}
                {/* 
                This is where you would add the actual HTML5 video element:
                
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  poster="/path-to-video-thumbnail.jpg"
                >
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  <source src="/path-to-your-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                HTML5 VIDEO EXPLANATION:
                - <video> is the standard HTML5 element for embedding video
                - controls attribute adds play/pause/volume controls
                - poster attribute shows thumbnail image before video plays
                - Multiple <source> elements provide different video formats
                - Fallback text shows if browser doesn't support video
                - object-cover ensures video fills container without distortion
                
                VIDEO FORMAT STRATEGY:
                - MP4: Widely supported, good for most browsers
                - WebM: Smaller file size, supported by modern browsers
                - Multiple formats ensure compatibility across all devices
                
                VIDEO OPTIMIZATION:
                - Compress video to reduce file size
                - Use appropriate resolution (1080p for web is usually sufficient)
                - Consider adaptive streaming for very large videos
                - Add captions/subtitles for accessibility
                */}
              </div>
              
              {/* VIDEO CAPTION/METADATA */}
              <div className="mt-6 text-center">
                {/* 
                VIDEO METADATA CONTAINER:
                - mt-6 = margin-top: 24px - space above caption
                - text-center = centers all caption content
                - Provides additional context about the video
                */}
                
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {/* Same text styling as other descriptions */}
                  
                  <span className="font-medium">Live recording</span> from our operations center showing real PMU data processing and anomaly detection.
                  {/* 
                  CAPTION CONTENT:
                  - Builds credibility by mentioning "live recording"
                  - font-medium makes "Live recording" stand out
                  - Explains what viewers will see in technical terms
                  */}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="w-full py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                <Zap className="mr-2 h-3.5 w-3.5" />
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                Comprehensive Grid Protection
              </h2>
              <p className="mt-4 max-w-[700px] text-slate-600 dark:text-slate-400 text-lg">
                A complete solution for preventing power grid failures and optimizing system performance.
              </p>
            </div>
            
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <div className="flex gap-4 animate-fade-in-left">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Real-Time Monitoring</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Continuous analysis of PMU data streams with sub-second latency. Monitor grid health 24/7 with instant anomaly detection and alerting capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-right">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                    <AlertTriangle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Oscillation Detection</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Identify dangerous oscillation patterns before they escalate. Our algorithms detect both forced and natural oscillations across all frequency ranges.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-left animation-delay-200">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                    <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Predictive Analytics</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    AI-powered predictions identify potential failures days or weeks in advance. Schedule maintenance proactively and prevent costly outages.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-right animation-delay-200">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Blackout Prevention</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Advanced algorithms identify cascading failure risks and provide actionable recommendations to prevent system-wide blackouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section id="solutions" className="w-full py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-square max-w-[500px] mx-auto animate-fade-in">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl" />
                  <div className="relative h-full w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="space-y-4">
                        <div className="h-24 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 animate-pulse-slow" />
                        <div className="h-32 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-950 dark:to-blue-950 animate-pulse-slow animation-delay-2000" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-32 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-950 dark:to-blue-950 animate-pulse-slow animation-delay-4000" />
                        <div className="h-24 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 animate-pulse-slow animation-delay-2000" />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Database className="h-24 w-24 text-slate-200 dark:text-slate-800" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up">
                <div>
                  <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                    <Globe className="mr-2 h-3.5 w-3.5" />
                    Enterprise Solutions
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900 dark:text-white">
                    Tailored for Your Grid Infrastructure
                  </h2>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  MatAstra adapts to your specific grid configuration and requirements. Our flexible platform scales from local distribution networks to continental transmission systems.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">Seamless Integration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Compatible with all major PMU vendors and SCADA systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">Enterprise Security</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Military-grade encryption and compliance with NERC CIP standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">24/7 Support</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Dedicated technical support team with grid operations expertise</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link
                    href="#demo"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Learn More About Our Solutions
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="w-full py-20 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-500">99.9%</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Uptime Reliability</p>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-200">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-500">&lt;100ms</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Detection Latency</p>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-500">50+</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Grid Operators</p>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-600">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-500">24/7</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Monitoring Coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT/CALL-TO-ACTION SECTION */}
        <section id="contact" className="w-full py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 mb-4">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Get Started Today
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                Ready to Protect Your Grid?
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">
                Contact our team to schedule a personalized demonstration and see how MatAstra can enhance your grid reliability.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:info@matastra.com"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  info@matastra.com
                </Link>
                <Link
                  href="tel:608-588-6418"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  (608) 588-6418
                </Link>
              </div>
              
              <p className="mt-8 text-xs text-slate-500 dark:text-slate-600">
                © {new Date().getFullYear()} MatAstra Inc. All rights reserved. 
                <Link href="#" className="ml-4 hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Privacy Policy</Link>
                <Link href="#" className="ml-4 hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Terms of Service</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}