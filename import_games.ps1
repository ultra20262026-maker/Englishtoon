$srcDir = "C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027"
$destDir = "C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\school-games-portal\games"

$gamesDatabase = @{}

if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

$grades = Get-ChildItem -Path $srcDir -Directory
foreach ($gradeFolder in $grades) {
    $gradeName = $gradeFolder.Name
    
    # Extract the digit from the folder name
    if ($gradeName -match "(\d)") {
        $digit = $matches[1]
        $gradeId = "primary-$digit"
    } else {
        Write-Host "Skipping unknown folder: $gradeName"
        continue
    }

    $gamesDatabase[$gradeId] = @{}
    $destGradePath = Join-Path $destDir $gradeId
    if (!(Test-Path $destGradePath)) {
        New-Item -ItemType Directory -Force -Path $destGradePath | Out-Null
    }

    $units = Get-ChildItem -Path $gradeFolder.FullName -Directory
    foreach ($unitFolder in $units) {
        $unitName = $unitFolder.Name
        if ($unitName -match "\d+") {
            $unitId = $matches[0]
            
            $gamesDatabase[$gradeId][$unitId] = New-Object System.Collections.ArrayList
            
            $destUnitPath = Join-Path $destGradePath "unit$unitId"
            if (!(Test-Path $destUnitPath)) {
                New-Item -ItemType Directory -Force -Path $destUnitPath | Out-Null
            }

            $games = Get-ChildItem -Path $unitFolder.FullName -Filter "*.html" -File
            foreach ($gameFile in $games) {
                $gameName = $gameFile.BaseName
                $destGamePath = Join-Path $destUnitPath $gameFile.Name
                
                Copy-Item -Path $gameFile.FullName -Destination $destGamePath -Force
                
                $gameObj = @{
                    name = $gameName
                    file = $gameFile.Name
                }
                [void]$gamesDatabase[$gradeId][$unitId].Add($gameObj)
            }
        }
    }
}

$jsonOutput = $gamesDatabase | ConvertTo-Json -Depth 5
Set-Content -Path "games_map.json" -Value $jsonOutput -Encoding UTF8
Write-Host "Successfully copied games and generated games_map.json"
