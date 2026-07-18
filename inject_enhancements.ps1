$gamesDir = "$PSScriptRoot\games"
$htmlFiles = Get-ChildItem -Path $gamesDir -Filter "*.html" -Recurse

$count = 0
foreach ($file in $htmlFiles) {
    $parts = $file.FullName -split "\\games\\"
    $subPath = $parts[1]
    $depth = ($subPath -split "\\").Count - 1
    
    $upStr = ""
    for ($i = 0; $i -lt $depth; $i++) {
        $upStr += "../"
    }
    $scriptPath = "${upStr}../js/game-enhancements.js"
    $injectCode = "<script src=`"$scriptPath`"></script>"
    
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    if (-not $content.Contains("game-enhancements.js")) {
        if ($content -match "(?i)</head>") {
            $content = $content -replace "(?i)(</head>)", "$injectCode`n`$1"
        } else {
            $content = "$injectCode`n$content"
        }
        
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        $count++
    }
}

Write-Host "Successfully injected enhancements into $count game files!"
