#!/bin/bash
# ================================
# Image Optimization Script
# Converts images to WebP format
# ================================

# Usage: ./scripts/optimize-images.sh [quality]
# Default quality: 80

QUALITY=${1:-80}
ASSETS_DIR="./assets/images"

echo "🖼️  Image Optimization Script"
echo "=============================="
echo "Quality: $QUALITY"
echo ""

# Check for cwebp
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Install with: brew install webp"
    exit 1
fi

# Convert all JPG files
echo "Converting JPG files..."
for file in $ASSETS_DIR/*.jpg $ASSETS_DIR/*.jpeg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .jpg)
        filename=$(basename "$filename" .jpeg)
        output="$ASSETS_DIR/${filename}.webp"
        
        if [ ! -f "$output" ] || [ "$file" -nt "$output" ]; then
            echo "  📷 Converting: $file -> $output"
            cwebp -q $QUALITY "$file" -o "$output" -quiet
        else
            echo "  ✓ Skipping: $file (already converted)"
        fi
    fi
done

# Convert all PNG files (with higher quality for transparency)
echo ""
echo "Converting PNG files..."
for file in $ASSETS_DIR/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .png)
        output="$ASSETS_DIR/${filename}.webp"
        
        if [ ! -f "$output" ] || [ "$file" -nt "$output" ]; then
            echo "  📷 Converting: $file -> $output"
            cwebp -q $((QUALITY + 5)) "$file" -o "$output" -quiet
        else
            echo "  ✓ Skipping: $file (already converted)"
        fi
    fi
done

echo ""
echo "✅ Done! WebP images created in $ASSETS_DIR"
echo ""
echo "📊 Size comparison:"
echo "-------------------"
for file in $ASSETS_DIR/*.webp; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .webp)
        original_jpg="$ASSETS_DIR/${filename}.jpg"
        original_png="$ASSETS_DIR/${filename}.png"
        
        webp_size=$(du -h "$file" | cut -f1)
        
        if [ -f "$original_jpg" ]; then
            orig_size=$(du -h "$original_jpg" | cut -f1)
            echo "  $filename: $orig_size (jpg) → $webp_size (webp)"
        elif [ -f "$original_png" ]; then
            orig_size=$(du -h "$original_png" | cut -f1)
            echo "  $filename: $orig_size (png) → $webp_size (webp)"
        fi
    fi
done
