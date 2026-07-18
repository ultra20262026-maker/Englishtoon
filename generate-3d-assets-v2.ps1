$ErrorActionPreference = "Stop"

$gamesDir = "C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games\primary-1"
$assetsDir = "C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\assets\images\words"

if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force | Out-Null
}

$htmlFiles = Get-ChildItem -Path $gamesDir -Filter "*.html" -Recurse
$uniqueWords = @{}

Write-Host "Extracting words from $($htmlFiles.Count) files..."

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Matches both formats:
    # 1. w: 'apple', i: 'data...'
    # 2. word: "sky", img: "data..."
    $pattern = '(w|word):\s*(["''])(?<word>.*?)\2.*?,\s*(i|img|image):\s*(["''])data:image/svg\+xml.*?\4'
    
    $matches = [regex]::Matches($content, $pattern)
    
    $fileModified = $false
    foreach ($m in $matches) {
        $word = $m.Groups['word'].Value
        if (-not [string]::IsNullOrWhiteSpace($word)) {
            $uniqueWords[$word] = $true
            
            $originalMatch = $m.Value
            # We replace only the data URI with the local image path, keeping the prefix
            $replacementPattern = '(i|img|image):\s*(["''])data:image/svg\+xml.*?\2'
            $imagePath = "../../../assets/images/words/$word.jpg"
            $replacement = "`$1: `"$imagePath`""
            
            $newMatch = $originalMatch -replace $replacementPattern, $replacement
            
            $content = $content.Replace($originalMatch, $newMatch)
            $fileModified = $true
        }
    }
    
    if ($fileModified) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    }
}

$wordsList = $uniqueWords.Keys | Sort-Object
Write-Host "Found $($wordsList.Count) unique words."

$count = 0
foreach ($word in $wordsList) {
    $count++
    $safeWord = $word -replace '[^a-zA-Z0-9\s-]', ''
    $filename = "$assetsDir\$word.jpg"
    
    if (Test-Path $filename) {
        Write-Host "[$count/$($wordsList.Count)] Skipping $word (already exists)"
        continue
    }
    
    Write-Host "[$count/$($wordsList.Count)] Downloading 3D Pixar image for: $word"
    
    $prompt = "a cute 3d pixar style icon of $safeWord on a clean background, soft lighting, vibrant colors"
    $encodedPrompt = [uri]::EscapeDataString($prompt)
    $url = "https://image.pollinations.ai/prompt/$encodedPrompt?nologo=true&width=300&height=300"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $filename -UseBasicParsing
    } catch {
        Write-Host "Failed to download image for ${word}: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Image generation and file update complete!"
