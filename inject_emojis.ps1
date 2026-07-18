$emojiMap = @{
    "hello" = "👋"; "goodbye" = "👋"; "shake hands" = "🤝"; "play" = "⚽"; "table" = "🪑";
    "tomato" = "🍅"; "tiger" = "🐯"; "teacher" = "👩‍🏫"; "tree" = "🌳"; "book" = "📖";
    "bag" = "🎒"; "desk" = "🪑"; "pencil" = "✏️"; "board" = "🏫"; "sit down" = "🪑";
    "stand up" = "🧍"; "open your books" = "📖"; "hany" = "👦"; "hana" = "👧"; "miss_mona" = "👩‍🏫";
    "shake_hands" = "🤝"; "bee" = "🐝"; "bus" = "🚌"; "blue" = "🔵"; "in" = "📥";
    "ink" = "🖋️"; "insect" = "🦗"; "ill" = "🤒"; "chair" = "🪑"; "sky" = "🌤️";
    "butterfly" = "🦋"; "bird" = "🐦"; "grass" = "🌿"; "flower" = "🌸"; "spider" = "🕷️";
    "sun" = "☀️"; "spoon" = "🥄"; "snake" = "🐍"; "star" = "⭐"; "ant" = "🐜";
    "axe" = "🪓"; "arrow" = "🏹"; "arm" = "💪"; "apple" = "🍎"; "father" = "👨";
    "mother" = "👩"; "brother" = "👦"; "sister" = "👧"; "parents" = "👪"; "grandfather" = "👴";
    "grandmother" = "👵"; "nose" = "👃"; "nail" = "💅"; "neck" = "🧣"; "nurse" = "👩‍⚕️";
    "net" = "🥅"; "pizza" = "🍕"; "parrot" = "🦜"; "potato" = "🥔"; "panda" = "🐼";
    "one" = "1️⃣"; "two" = "2️⃣"; "three" = "3️⃣"; "four" = "4️⃣"; "five" = "5️⃣";
    "hair" = "💇"; "horse" = "🐴"; "house" = "🏠"; "hat" = "🎩"; "hands" = "👐";
    "door" = "🚪"; "doll" = "🎎"; "dog" = "🐶"; "drum" = "🥁"; "duck" = "🦆";
    "flowers" = "💐"; "eye" = "👁️"; "mouth" = "👄"; "ear" = "👂"; "head" = "🗣️";
    "tongue" = "👅"; "leg" = "🦵"; "foot" = "🦶"; "feet" = "👣"; "toes" = "🦶";
    "red" = "🔴"; "rocket" = "🚀"; "ring" = "💍"; "rabbit" = "🐰"; "robot" = "🤖";
    "egg" = "🥚"; "eggplant" = "🍆"; "enter" = "🚪"; "elephant" = "🐘"; "elbow" = "💪";
    "touch" = "👆"; "hear" = "👂"; "see" = "👁️"; "taste" = "👅"; "smell" = "👃";
    "car" = "🚗"; "cat" = "🐱"; "carrot" = "🥕"; "cup" = "☕"; "cake" = "🎂";
    "kite" = "🪁"; "king" = "👑"; "kitchen" = "🍳"; "key" = "🔑"; "hand" = "✋";
    "cow" = "🐄"; "chicken" = "🐔"; "mouse" = "🐭"; "milk" = "🥛"; "mango" = "🥭";
    "moon" = "🌙"; "monkey" = "🐒"; "goat" = "🐐"; "gloves" = "🧤"; "grapes" = "🍇";
    "girl" = "👧"; "guitar" = "🎸"; "octopus" = "🐙"; "olive" = "🫒"; "ostrich" = "🦤";
    "fox" = "🦊"; "fish" = "🐟"; "fork" = "🍴"; "frog" = "🐸"; "fan" = "🪭";
    "lion" = "🦁"; "giraffe" = "🦒"; "banana" = "🍌"; "boy" = "👦"; "ball" = "🏀";
    "bike" = "🚲"; "lunch" = "🍱"; "leaf" = "🍃"; "lamp" = "💡"; "lemon" = "🍋";
    "turtle" = "🐢"; "couch" = "🛋️"; "on" = "🔛"; "under" = "🔽"; "cage" = "🪤";
    "umbrella" = "☂️"; "up" = "🆙"; "unlock" = "🔓"; "jam" = "🍯"; "jacket" = "🧥";
    "jellyfish" = "🪼"; "jar" = "🫙"; "jeans" = "👖"; "yellow" = "🟡"; "green" = "🟢";
    "black" = "⚫"; "white" = "⚪"; "orange" = "🟠"; "pink" = "🩷"; "brown" = "🟤";
    "grey" = "🔘"; "purple" = "🟣"; "square" = "🔲"; "circle" = "🔴"; "triangle" = "🔺"
}

$files = Get-ChildItem -Path "games" -Filter "*.html" -Recurse
$totalModified = 0

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    $pattern = '((?:word|w)\s*:\s*([''"])(.*?)\2\s*,\s*(?:img|i)\s*:\s*)([''"]).*?\4'
    
    $newContent = [regex]::Replace($content, $pattern, {
        param($match)
        $word = $match.Groups[3].Value.Trim().ToLower()
        $emoji = $emojiMap[$word]
        if (-not $emoji) {
            $emoji = "❓"
        }
        
        $svg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='80'>$emoji</text></svg>"
        
        return $match.Groups[1].Value + $match.Groups[4].Value + $svg + $match.Groups[4].Value
    })

    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Modified $($file.Name)"
        $totalModified++
    }
}
Write-Host "Total files modified: $totalModified"
