$srcDir = "C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027"
$destDir = "C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\school-games-portal\games"

$gamesDatabase = @{}

$grades = Get-ChildItem -Path $srcDir -Directory
foreach ($gradeFolder in $grades) {
    $gradeName = $gradeFolder.Name
    if ($gradeName -match "(\d)") {
        $digit = $matches[1]
        $gradeId = "primary-$digit"
    } else { continue }

    $gamesDatabase[$gradeId] = @{}
    $destGradePath = Join-Path $destDir $gradeId

    $units = Get-ChildItem -Path $gradeFolder.FullName -Directory
    foreach ($unitFolder in $units) {
        $unitName = $unitFolder.Name
        if ($unitName -match "\d+") {
            $unitId = $matches[0]
            $gamesDatabase[$gradeId][$unitId] = New-Object System.Collections.ArrayList
            
            $destUnitPath = Join-Path $destGradePath "unit$unitId"
            $games = Get-ChildItem -Path $destUnitPath -Filter "*.html" -File
            foreach ($gameFile in $games) {
                $gameName = $gameFile.BaseName
                $gameObj = @{
                    name = $gameName
                    file = $gameFile.Name
                }
                [void]$gamesDatabase[$gradeId][$unitId].Add($gameObj)
            }
        }
    }
}

$jsonOutput = $gamesDatabase | ConvertTo-Json -Depth 5 -Compress
$jsonOutput = [System.Text.RegularExpressions.Regex]::Unescape($jsonOutput)
[System.IO.File]::WriteAllText("C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\school-games-portal\games_map.json", $jsonOutput, [System.Text.Encoding]::UTF8)
