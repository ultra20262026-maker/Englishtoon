$ErrorActionPreference = "Stop"

$gamesDir = "C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon\games"
$htmlFiles = Get-ChildItem -Path $gamesDir -Filter "*.html" -Recurse

Write-Host "Fixing Arabic text in $($htmlFiles.Count) files..."

foreach ($file in $htmlFiles) {
    # Read as UTF8 so we can reliably match literal question marks and mojibake
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    $modified = $false

    # 1. Fix guard script alert (matches the corrupted mojibake)
    if ($content -match "alert\('O1O.*?U<.'\);") {
        $content = $content -replace "alert\('O1O.*?U<.'\);", "alert('عذراً لا يمكنك الدخول للعبة مباشرة. يرجى تسجيل الدخول أولاً.');"
        $modified = $true
    }

    # 2. Fix Score and Lives
    if ($content -match "<div>\?+:\s*<span id=`"score`"") {
        $content = $content -replace "<div>\?+:\s*<span id=`"score`"", "<div>النقاط: <span id=`"score`""
        $modified = $true
    }
    if ($content -match "<div>\?+:\s*<span id=`"lives`"") {
        $content = $content -replace "<div>\?+:\s*<span id=`"lives`"", "<div>القلوب: <span id=`"lives`""
        $modified = $true
    }
    
    # 3. Fix Game Over Screen
    if ($content -match "<h1[^>]*>\?+ \?+!</h1>") {
        $content = $content -replace "(<h1[^>]*>)\?+ \?+!(</h1>)", "`$1انتهت اللعبة!`$2"
        $modified = $true
    }
    if ($content -match "<p[^>]*>\?+:\s*<span id=`"final-score`"") {
        $content = $content -replace "(<p[^>]*>)\?+:\s*<span id=`"final-score`"", "`$1النقاط: <span id=`"final-score`""
        $modified = $true
    }
    
    # 4. Fix Buttons
    if ($content -match "onclick=`"startGame\(\)`"[^>]*>\?+!*</button>") {
        $content = $content -replace "(onclick=`"startGame\(\)`"[^>]*>)\?+!*(</button>)", "`$1إبدأ اللعب`$2"
        $modified = $true
    }
    # Play again button (often has margin-top and multiple words of ??)
    if ($content -match "onclick=`"startGame\(\)`"[^>]*>\?+ \?+ \?+</button>") {
        $content = $content -replace "(onclick=`"startGame\(\)`"[^>]*>)\?+ \?+ \?+(</button>)", "`$1إلعب مرة أخرى`$2"
        $modified = $true
    }

    # 5. Fix Start Screen Title (just use "Welcome to Englishtoon!")
    if ($content -match "id=`"start-screen`"[^>]*>[\s\S]*?<h1[^>]*>\?+.*?</h1") {
        $content = $content -replace "(id=`"start-screen`"[^>]*>[\s\S]*?<h1[^>]*>)\?+.*?(</h1)", "`$1مرحباً بك في اللعبة`$2"
        $modified = $true
    }
    
    # 6. Fix Start Screen Subtitle
    if ($content -match "id=`"start-screen`"[^>]*>[\s\S]*?<p[^>]*>\?+.*?</p") {
        $content = $content -replace "(id=`"start-screen`"[^>]*>[\s\S]*?<p[^>]*>)\?+.*?(</p)", "`$1اضغط على زر إبدأ اللعب لتبدأ المغامرة!`$2"
        $modified = $true
    }

    if ($modified) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    }
}

Write-Host "Fix complete!"
