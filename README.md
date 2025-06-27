# Would You Rather Labs

A fun interactive web app where users can explore thought-provoking "Would You Rather?" questions and create their own dilemmas.

## Features

- **Interactive Cards** - Click question cards to cycle through visual states (white → green → red)
- **Create Questions** - Add your own "Would You Rather?" questions with custom emojis
- **Working Contact Form** - Send real emails using EmailJS integration
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Multiple Pages** - Home, About, and Contact sections
- **Modern UI** - Clean design with smooth animations and hover effects
- **User-Generated Content** - Questions are added dynamically to the homepage

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- EmailJS

## Getting Started

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory with your EmailJS credentials:
```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Docker
```bash
docker build -t would-you-rather-labs .
docker run -p 80:80 would-you-rather-labs
```

## Project Structure

```
src/
├── components/
│   ├── HomePage.tsx         # Main page with question cards
│   ├── QuestionCard.tsx     # Interactive card component
│   ├── CreateQuestion.tsx   # Modal for creating new questions
│   ├── Navbar.tsx          # Navigation component
│   ├── About.tsx           # About page
│   └── Contact.tsx         # Contact page with EmailJS
├── main.tsx                # App entry point
└── index.css              # Global styles
```

## Usage

- **Click question cards** to cycle through different visual states and practice making tough choices
- **Create new questions** using the "Create Your Own Question" button
- **Contact us** through the working contact form that sends real emails
- **Navigate** between pages using the responsive navigation bar
