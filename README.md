# Physical Store E-commerce App

A modern, responsive e-commerce application built with Next.js 15, TypeScript, and Tailwind CSS. This application features a complete online store with product galleries, shopping cart, user authentication, and more.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Product Management**: Complete product catalog with categories and search
- **Shopping Cart**: Full cart functionality with persistent state
- **User Authentication**: Integrated with Clerk for secure user management
- **Database Integration**: Supabase for backend data management
- **Performance Optimized**: Built with performance best practices
- **SEO Friendly**: Optimized for search engines with proper meta tags

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/physical-store.git
cd physical-store
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your environment variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deploy on Vercel

This application is optimized for Vercel deployment:

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/physical-store.git)

📖 **For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Manual Deployment

1. **Connect to Vercel**:

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository: `https://github.com/yourusername/physical-store.git`

2. **Configure Environment Variables** (REQUIRED):
   In Vercel dashboard, go to your project → Settings → Environment Variables and add:

   **Required for Authentication:**

   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_test_your_key_here`
   - `CLERK_SECRET_KEY` = `sk_test_your_secret_key_here`

   **Optional for Database:**

   - `NEXT_PUBLIC_SUPABASE_URL` = `your_supabase_url`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `your_supabase_anon_key`
   - `SUPABASE_SERVICE_ROLE_KEY` = `your_service_role_key`

   **Optional for Performance:**

   - `NEXT_TELEMETRY_DISABLED` = `1`

   ⚠️ **Important**: Without Clerk keys, the build will fail with "Missing publishableKey" error.

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically detect Next.js and use the optimal settings
   - The `vercel.json` configuration file is already included for optimal performance

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   ├── contact/           # Contact page
│   ├── gallery/           # Product gallery
│   ├── shop/              # Product catalog
│   └── ...
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
├── middleware.ts          # Next.js middleware
├── tailwind.config.ts     # Tailwind CSS configuration
└── vercel.json           # Vercel deployment configuration
```

## 🎨 Key Features

### Product Catalog

- Browse products by categories (Men's, Women's, Kids)
- Advanced search and filtering
- Product detail pages with image galleries
- Related products suggestions

### Shopping Experience

- Add to cart functionality
- Cart persistence across sessions
- Secure checkout process
- Order management

### User Management

- User registration and login
- Profile management
- Order history
- Account dashboard

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading times

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚨 Troubleshooting

### Vercel Deployment Issues

**Error: "Missing publishableKey"**

```
Error: @clerk/clerk-react: Missing publishableKey
```

**Solution**: Add Clerk environment variables in Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
3. Redeploy the project

**Error: "Pre-rendering Error"**

- Ensure all environment variables are properly set
- Check that your Clerk keys are valid and active
- Verify your Supabase configuration if using database features

**Build Performance Issues**

- Add `NEXT_TELEMETRY_DISABLED=1` to disable Next.js telemetry
- Ensure your Vercel plan supports the build requirements

### Local Development Issues

**Environment Variables Not Loading**

1. Copy `.env.example` to `.env.local`
2. Fill in your actual API keys
3. Restart your development server

**TypeScript Errors**

- Run `npm run build` to check for compilation errors
- Ensure all dependencies are installed: `npm install`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Ready for Vercel Deployment!** 🚀

This application is fully configured and optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel, add your environment variables, and deploy!
# physicalStore
# physicalStore
# physicalStore
