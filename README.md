# Article Page with Markdown Rendering

This project demonstrates a beautiful article page that renders markdown files with a design inspired by the shadcn/ui documentation style.

## Features

- **Markdown Rendering**: Renders markdown files with proper syntax highlighting
- **Table of Contents**: Automatic generation of "On This Page" navigation
- **Responsive Design**: Clean, modern layout with proper spacing and typography
- **Smooth Scrolling**: Click on navigation items to smoothly scroll to sections
- **Beautiful Styling**: Professional appearance with Tailwind CSS

## Components

### ArticlePage

The main component that renders markdown content with:

- Left sidebar navigation showing all headings
- Main content area with styled markdown
- Back button to return to the main page
- Professional header with title and accent line

## Usage

1. **Import the component**:
   ```tsx
   import ArticlePage from './components/ArticlePage';
   ```

2. **Use with markdown content**:
   ```tsx
   <ArticlePage 
     markdownContent={markdownString} 
     title="Your Article Title"
     onBack={() => handleBack()}
   />
   ```

3. **Add markdown files**:
   - Place markdown files in the `src/articles/` directory
   - Import them using `?raw` suffix: `import content from './articles/file.md?raw'`

## Markdown Features Supported

- Headings (H1, H2, H3, etc.)
- Paragraphs and text formatting
- Code blocks and inline code
- Lists (ordered and unordered)
- Links and emphasis
- Blockquotes
- GitHub Flavored Markdown (GFM)

## Styling

The component uses Tailwind CSS classes for consistent styling:

- Clean typography with proper hierarchy
- Subtle colors and spacing
- Hover effects and transitions
- Responsive layout that works on all screen sizes

## Navigation

The left sidebar automatically generates navigation based on markdown headings:

- H1 headings appear as main navigation items
- H2 headings are indented slightly
- H3+ headings are indented further
- Clicking any item smoothly scrolls to that section

## Example

Check out the example article by clicking "View Article" on the main page. The example demonstrates:

- Comprehensive content structure
- Code examples with syntax highlighting
- Various markdown elements
- Professional formatting

## Dependencies

- `react-markdown`: For rendering markdown
- `remark-gfm`: For GitHub Flavored Markdown support
- `tailwindcss`: For styling
- `@tailwindcss/typography`: For prose styling (optional)

## Getting Started

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Click "View Article" to see the markdown rendering in action
4. Customize the styling and add your own markdown content
