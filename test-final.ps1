$body = '{"event":"PURCHASE_COMPLETE","data":{"buyer":{"email":"comprador.real@gmail.com","name":"Carlos Martinez Lopez","phone":"+525512345678"},"purchase":{"price":{"value":497.00,"currency_code":"MXN"}}}}'

Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "  TEST FINAL - WEBHOOK CON NUEVO TOKEN" -ForegroundColor Cyan  
Write-Host "================================================`n" -ForegroundColor Cyan

Write-Host "Enviando compra de prueba..." -ForegroundColor Yellow
Write-Host "Comprador: Carlos Martinez Lopez" -ForegroundColor Gray
Write-Host "Email: comprador.real@gmail.com" -ForegroundColor Gray
Write-Host "Valor: 497.00 MXN`n" -ForegroundColor Gray

try {
    $response = Invoke-RestMethod -Uri "https://sanatucuerpo.vercel.app/api/hotmart-webhook" -Method Post -Body $body -ContentType "application/json" -UseBasicParsing
    
    Write-Host "RESPUESTA:" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Gray
    $jsonResponse = $response | ConvertTo-Json -Depth 10
    Write-Host $jsonResponse
    Write-Host "========================================`n" -ForegroundColor Gray
    
    if ($response.success -eq $true) {
        Write-Host "SUCCESS! WEBHOOK FUNCIONANDO CORRECTAMENTE!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Datos procesados:" -ForegroundColor Cyan
        if ($response.purchaseData) {
            Write-Host "  Email: $($response.purchaseData.email)" -ForegroundColor White
            Write-Host "  Nombre: $($response.purchaseData.buyerName)" -ForegroundColor White
            Write-Host "  Valor: $($response.purchaseData.value) $($response.purchaseData.currency)" -ForegroundColor White
        }
        Write-Host ""
        Write-Host "Facebook Response:" -ForegroundColor Cyan
        if ($response.facebookResponse) {
            Write-Host "  Events Received: $($response.facebookResponse.events_received)" -ForegroundColor White
            Write-Host "  Messages: $($response.facebookResponse.messages -join ', ')" -ForegroundColor White
        }
        Write-Host ""
        Write-Host "PROXIMOS PASOS:" -ForegroundColor Yellow
        Write-Host "  1. Ve a Facebook Events Manager" -ForegroundColor White
        Write-Host "  2. Pixel: 863038383089458" -ForegroundColor White
        Write-Host "  3. Ve a 'Test Events' o 'Activity'" -ForegroundColor White
        Write-Host "  4. Deberia aparecer evento 'Purchase' de hace unos segundos" -ForegroundColor White
        Write-Host ""
    }
    else {
        Write-Host "ADVERTENCIA: Hubo un problema" -ForegroundColor Yellow
        Write-Host "Error: $($response.error)" -ForegroundColor Red
    }
}
catch {
    Write-Host "ERROR:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    if ($_.ErrorDetails) {
        Write-Host "`nDetalles:" -ForegroundColor Yellow
        Write-Host $_.ErrorDetails.Message -ForegroundColor Red
    }
}

Write-Host "`n================================================" -ForegroundColor Cyan
