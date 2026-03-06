Get-ChildItem -Path "c:\Users\INFOTECH\Desktop\PortFolioWebSite" -Recurse -Include *.html,*.css,*.js | 
    Where-Object { $_.FullName -notmatch '\\\.git\\' } | 
    ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        $newContent = $content -replace 'href="/css/', 'href="css/' `
                               -replace 'src="/images/', 'src="images/' `
                               -replace 'src="/javaScript/', 'src="javaScript/' `
                               -replace 'url\("/images/', 'url("images/' `
                               -replace 'url\("/css/', 'url("css/' `
                               -replace "url\('/images/", "url('images/"
        if ($content -ne $newContent) {
            Set-Content -Path $_.FullName -Value $newContent -Encoding UTF8
            Write-Host "Updated $($_.FullName)"
        }
    }
