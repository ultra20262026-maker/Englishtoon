$gamesDir = "C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\school-games-portal\games"

$guardCode = @"
<script id="guard-script">
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        alert('عذراً، لا يمكنك الدخول لهذه اللعبة مباشرة. يرجى تسجيل الدخول أولاً.');
        window.location.href = window.location.origin + (window.location.pathname.includes('/Englishtoon/') ? '/Englishtoon/' : '/');
    }
</script>
"@

$htmlFiles = Get-ChildItem -Path $gamesDir -Filter "*.html" -Recurse

$count = 0
foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    if (-not $content.Contains('id="guard-script"')) {
        # Try to inject after <head>
        if ($content -match "(?i)<head>") {
            $content = $content -replace "(?i)(<head>)", "`$1`n$guardCode"
        } else {
            # If no <head>, inject at the very beginning
            $content = "$guardCode`n$content"
        }
        
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        $count++
    }
}

Write-Host "Successfully protected $count new game files!"
