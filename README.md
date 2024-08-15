# Textlight

Textlight is a Pastebin-type application that combines the features found in carbon.now.sh to generate beautiful images of code snippets for sharing on various platforms. While still in development, Textlight is available for early testing, and contributions are greatly encouraged.

## Technologies Used

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![Node.JS](https://img.shields.io/badge/Node.JS-339933?style=flat&logo=node.js&logoColor=white)
![Next.JS](https://img.shields.io/badge/Next.JS-000000?style=flat&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Shiki](https://img.shields.io/badge/Shiki-FF6347?style=flat)
![Radix UI](https://img.shields.io/badge/Radix_UI-000000?style=flat&logo=radix-ui&logoColor=white)

## Features

- **Code Sharing**: Save and share code snippets easily.
- **Snippet Beautification**: Generate and customize beautiful images of your code snippets.
- **Syntax Highlighting**: Beautiful code syntax highlighting with Shiki.

 

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/textlight.git
   cd textlight
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Setting Up Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```plaintext
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-postgresql-url
```

## Contributing

This project is still under development, and contributions are more than welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.