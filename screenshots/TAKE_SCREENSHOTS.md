# How to Take Screenshots

Since automated screenshots had issues, please take screenshots manually using one of these methods:

## Method 1: Using Windows Snipping Tool (Recommended)

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Open Snipping Tool:**
   - Press `Windows Key + Shift + S` for quick screenshot
   - Or search for "Snipping Tool" in Windows

4. **Take screenshots of each page:**
   - **Home page**: Navigate to `http://localhost:5173/` → Take screenshot → Save as `home-page.png`
   - **Products page**: Navigate to `http://localhost:5173/products` → Wait for products to load → Take screenshot → Save as `products-page.png`
   - **List page**: Navigate to `http://localhost:5173/list` → Wait for products to load → Take screenshot → Save as `list-page.png`
   - **Detail page**: Navigate to `http://localhost:5173/products/1` → Wait for product to load → Take screenshot → Save as `detail-page.png`
   - **Dark mode**: Toggle dark mode using the button in navbar → Take screenshot → Save as `dark-mode.png`

5. **Save all screenshots** in this `screenshots` directory with the exact filenames listed above.

## Method 2: Using Browser Extensions

1. Install a screenshot extension like:
   - **Firefox**: "Full Page Screen Capture"
   - **Chrome**: "Full Page Screen Capture" or "Awesome Screenshot"
   - **Edge**: "Full Page Screen Capture"

2. Navigate to each page and use the extension to capture full-page screenshots.

3. Save them with the filenames listed above in this directory.

## Method 3: Using Browser Developer Tools

1. Open Developer Tools (F12)
2. Press `Ctrl + Shift + P` (Command Palette)
3. Type "screenshot" and select "Capture full size screenshot"
4. Save with the appropriate filename

## Tips for Better Screenshots

- **Window Size**: Resize your browser to 1920x1080 or similar for consistent screenshots
- **Wait for Loading**: Make sure all content (especially product images) is fully loaded
- **Full Page**: Use full-page screenshots when possible to show the complete layout
- **Dark Mode**: Make sure to toggle dark mode before taking the dark-mode screenshot
- **File Format**: Save as PNG format for best quality

## Required Screenshots

Make sure you have these 5 screenshots:
- ✅ `home-page.png`
- ✅ `products-page.png`
- ✅ `list-page.png`
- ✅ `detail-page.png`
- ✅ `dark-mode.png`

Once you've added the screenshots, they will automatically appear in the main README.md file!

