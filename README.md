# Frontend Hub Dashboard

A modern, responsive dashboard UI built with Next.js 15, TypeScript, and shadcn/ui components. This project showcases a beautiful and functional dashboard interface with a focus on design, user experience, and modern UI patterns.

![Light Mode Dashboard](./public/screenshot-light.png)
![Dark Mode Dashboard](./public/screenshot-dark.png)

## ✨ Features

- 🎨 **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- 🌓 **Dark/Light Mode** - Seamless theme switching with next-themes
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 📊 **Interactive Charts** - Beautiful data visualization with Recharts
- 📋 **Data Tables** - Advanced tables with sorting and filtering
- 🎯 **Drag & Drop** - Interactive components with dnd-kit
- 🚀 **Performance Optimized** - Built with modern web standards

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Libraries
- **shadcn/ui** - Beautifully designed components
- **Radix UI** - Low-level UI primitives
- **Lucide React** - Beautiful & consistent icon set
- **Tabler Icons** - Additional icon library
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Utility for merging Tailwind classes

### UI/UX Features
- **Recharts** - Composable charting library
- **DnD Kit** - Drag and drop functionality
- **next-themes** - Theme management
- **Sonner** - Toast notifications
- **Vaul** - Drawer component
- **NextJS TopLoader** - Page loading indicator

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Dashboard pages
│   │   ├── analytics/     # Analytics dashboard
│   │   ├── dashboard/     # Main dashboard
│   │   └── lifecycle/     # Lifecycle management
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── analytics/        # Analytics components
│   ├── nav-*.tsx         # Navigation components
│   ├── data-table.tsx    # Data table component
│   ├── lifecycle-*.tsx   # Lifecycle components
│   └── chart-*.tsx       # Chart components
├── lib/                  # Utility functions
│   ├── constants/        # Application constants
│   └── utils.ts          # Utility functions
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/makara4code/next-shadcn-dashboard.git
   cd next-shadcn-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎨 Customization

### Adding New Components

This project uses shadcn/ui components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Theming

The application supports dark/light mode switching. Customize themes in:
- `app/globals.css` - CSS custom properties
- `components/theme-toggle.tsx` - Theme switching logic

### Styling

- Tailwind CSS classes for styling
- CSS custom properties for theme variables
- Component variants with class-variance-authority

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)