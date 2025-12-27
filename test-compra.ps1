$body = '{"event":"PURCHASE_COMPLETE","data":{"buyer":{"email":"test@example.com","name":"Maria Test Rodriguez","phone":"+525512345678"},"purchase":{"price":{"value":497.00,"currency_code":"MXN"}}}}'

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  TEST DE COMPRA - WEBHOOK HOTMART" -ForegroundColor Cyan  
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Enviando evento de prueba..." -ForegroundColor Yellow
Write-Host "Email: test@example.com" -ForegroundColor Gray
Write-Host "Valor: 497.00 MXN`n" -ForegroundColor Gray

try {
    $response = Invoke-RestMethod -Uri "https://sanatucuerpo.vercel.app/api/hotmart-webhook" -Method Post -Body $body -ContentType "application/json" -UseBasicParsing
    
    Write-Host "RESPUESTA DEL SERVIDOR:" -ForegroundColor Green
    Write-Host "----------------------------------------" -ForegroundColor Gray
    Write-Host ($response | ConvertTo-Json -Depth 10)
    Write-Host "----------------------------------------`n" -ForegroundColor Gray
    
    if ($response.success -eq $true) {
        Write-Host "SUCCESS!" -ForegroundColor Green
        Write-Host "El webhook funciono correctamente`n" -ForegroundColor Green
        
        Write-Host "Ahora verifica:" -ForegroundColor Yellow
        Write-Host "1. Logs en Vercel (ya tienes la pagina abierta)" -ForegroundColor White
        Write-Host "2. Facebook Events Manager - Pixel 863038383089458" -ForegroundColor White
        Write-Host "3. Busca evento 'Purchase' de hace unos segundos`n" -ForegroundColor White
    }
    else {
        Write-Host "WARNING: Hubo un error" -ForegroundColor Yellow
        Write-Host "Error: $($response.error)`n" -ForegroundColor Red
    }
}
catch {
    Write-Host "ERROR al conectar:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    if ($_.ErrorDetails) {
        Write-Host "`nDetalles:" -ForegroundColor Yellow
        Write-Host $_.ErrorDetails.Message -ForegroundColor Red
    }
}
