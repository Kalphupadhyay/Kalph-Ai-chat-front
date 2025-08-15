# Kalph AI Persona Chat

A modern, persona-based chat application that allows users to interact with AI assistants through different personality lenses.

![Kalph AI Chat](./assets/suit-work.jpg)

## Features

- **Multiple AI Personas**: Chat with AI characters that have distinct personalities and conversational styles
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **ChatGPT-like Interface**: Clean, intuitive UI inspired by leading chat applications
- **Real-time Responses**: Instant AI responses powered by cutting-edge language models
- **Markdown Support**: Rich text formatting for code blocks, lists, and more

## Technology Stack

- **React**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend tooling
- **Bun**: Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Node.js 16+ or Bun installed on your machine
- Basic knowledge of React and TypeScript

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kalphupadhyay/Kalph-Ai-chat-front.git
   cd Kalph-Ai-chat-front
   ```

2. Install dependencies:

   ```bash
   # Using npm
   npm install

   # Or using Bun
   bun install
   ```

3. Start the development server:

   ```bash
   # Using npm
   npm run dev

   # Or using Bun
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Select a persona from the available options
2. Type your message in the input field at the bottom
3. Press Enter or click the send button to submit your message
4. The AI will respond based on the selected persona's characteristics

## Project Structure

```
src/
├── assets/         # Static assets like images
├── components/     # Reusable UI components
│   ├── Chat.tsx    # Main chat container
│   ├── ChatMessage.tsx # Individual message component
│   ├── Header.tsx  # Application header
│   └── Persona.tsx # Persona selection component
├── config/         # Configuration files
├── constants/      # API endpoints and other constants
└── pages/          # Application pages
    └── HomePage.tsx # Main application page
```

## Customization

### Adding New Personas

To add a new persona, update the persona data in your application:

1. Add the persona details to your personas data store
2. Include a unique identifier, name, and description
3. Optionally add an avatar image for the persona

### Styling

The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the Tailwind configuration in `tailwind.config.js`
2. Updating class names in component files
3. Adding custom CSS in the respective component files

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with ❤️ by Kalph
- UI inspired by ChatGPT
- Thanks to all contributors and supporters

---

© 2025 Kalph AI Chat. All rights reserved.
