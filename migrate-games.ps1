$ErrorActionPreference = "Stop"

$repoDir = "C:\Users\Mr Mahmoud Elziadi\Documents\GitHub\Englishtoon"
$oldGamesDir = "$repoDir\games"
$newGamesDir = "C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027"

Write-Host "Deleting old games directory completely..."
if (Test-Path $oldGamesDir) {
    Remove-Item -Recurse -Force $oldGamesDir
}

Write-Host "Creating fresh games directory..."
New-Item -ItemType Directory -Path $oldGamesDir | Out-Null

$mapping = @{
    "grade 1 تم" = "primary-1"
    "prim 2 تم" = "primary-2"
    "prim 3 تم" = "primary-3"
    "prim 4 Standalone تم" = "primary-4"
    "prim 5 Standaloneتم" = "primary-5"
    "prim 6 Standalone  تم" = "primary-6"
    "Prep 1 تم" = "prep-1"
}

foreach ($key in $mapping.Keys) {
    $sourcePath = "$newGamesDir\$key"
    $targetPath = "$oldGamesDir\$($mapping[$key])"
    
    if (Test-Path $sourcePath) {
        Write-Host "Copying $key to $($mapping[$key])..."
        Copy-Item -Path $sourcePath -Destination $targetPath -Recurse -Force
    } else {
        Write-Host "WARNING: Source folder $key not found!" -ForegroundColor Yellow
    }
}

Write-Host "Games successfully migrated!"
