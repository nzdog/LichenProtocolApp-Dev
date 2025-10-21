# Claude Code Project Guidelines

## Project Overview
Lichen Protocol App - Interactive diagnostic protocol system with TypeScript, React, and Express backend.

## Code Quality Standards

### TypeScript
- Use TypeScript strict mode
- Avoid `any` types - use specific types or `unknown`
- Prefix unused variables with underscore (`_variableName`)
- Use ES6 imports instead of `require()`

### React
- Functional components with hooks
- Proper cleanup in useEffect
- Accessibility: use semantic HTML and ARIA labels

### Code Style
- Use async/await instead of callbacks
- Handle errors gracefully with try/catch
- Add descriptive comments for complex logic
- Keep functions focused and under 50 lines when possible

### Performance
- Use opacity-only animations (avoid transform/scale when possible)
- Debounce frequent events
- Clean up event listeners and timeouts

### Testing Priority Areas
- API endpoints and error handling
- User interactions (clicks, form submissions)
- Animation timing and sequence
- Mobile responsiveness

## Common Issues to Check

### Security
- Never commit API keys or secrets
- Validate user input before processing
- Use HTTPS for API calls in production

### Bugs to Watch For
- Memory leaks from uncleaned event listeners
- Race conditions in async operations
- Unhandled promise rejections
- Missing null/undefined checks

### Best Practices
- DRY (Don't Repeat Yourself)
- Clear variable and function names
- Consistent error messaging
- Mobile-first responsive design

## Review Focus Areas
When reviewing PRs, please pay special attention to:
1. TypeScript type safety
2. Animation performance
3. Accessibility features
4. Error handling
5. Mobile compatibility
