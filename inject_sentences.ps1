$emojiMap = @{
    "the sky is blue" = "🌤️"; "the grass is green" = "🌿"; "the sun is yellow" = "☀️"; "the flower is red" = "🌹";
    "this is a circle" = "🔴"; "this is a square" = "🔲"; "this is a triangle" = "🔺"; "there is 1 yellow rectangle" = "🟨";
    "the ___ is blue." = "🌤️"; "the ___ is green." = "🌿"; "the sun is ___." = "☀️"; "the flower is ___." = "🌹";
    "this is a ___." = "🔴"; "there is 1 yellow ___." = "🟨"; "the triangle has 3 sides" = "🔺";
    "this is a circle." = "🔴"; "this is a square." = "🔲"; "this is a triangle." = "🔺"; "there is 1 yellow rectangle." = "🟨";
    "this is a red circle" = "🔴"; "this is a blue square" = "🟦";
    "this is my father" = "👨"; "this is my mother" = "👩"; "they are my parents" = "👪";
    "how many flowers" = "💐"; "there are 2 flowers" = "🌸🌸"; "who is this" = "❓"
}

$files = "بطاقات الذاكرة.html", "بناء البرج.html", "بناء الجمل.html", "توصيل الجمل.html", "سؤال وجواب.html", "لوحة التلوين.html", "11_بناء_الجمل.html"
$paths = Get-ChildItem -Path "games\primary-1" -Recurse -Include $files
$totalModified = 0

foreach ($file in $paths) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    $pattern = '((?:text|answer)\s*:\s*([''"])(.*?)\2\s*,\s*(?:img|i)\s*:\s*)([''"]).*?\4'
    $pattern2 = '((?:img|i)\s*:\s*([''"]).*?\2\s*,\s*(?:text|answer)\s*:\s*([''"])(.*?)\3)'
    
    $newContent = [regex]::Replace($content, $pattern, {
        param($match)
        $text = $match.Groups[3].Value.Trim().ToLower()
        $emoji = $emojiMap[$text]
        if (-not $emoji) { $emoji = "❓" }
        $svg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>$emoji</text></svg>"
        return $match.Groups[1].Value + $match.Groups[4].Value + $svg + $match.Groups[4].Value
    })
    
    $newContent = [regex]::Replace($newContent, $pattern2, {
        param($match)
        $text = $match.Groups[4].Value.Trim().ToLower()
        $emoji = $emojiMap[$text]
        if (-not $emoji) { $emoji = "❓" }
        $svg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>$emoji</text></svg>"
        return "(img: `"" + $svg + "`", answer: `"" + $match.Groups[4].Value + "`")" # Simplified for answer:
    })

    # specifically for games with img first, like سؤال وجواب
    # The pattern2 logic above is a bit messy, let's use a simpler one.
    
    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Modified $($file.Name)"
        $totalModified++
    }
}
Write-Host "Total files modified: $totalModified"
