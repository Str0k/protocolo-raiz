$uri = "https://sanatucuerpo.vercel.app/api/hotmart-webhook"

$body = @"
{
  "event": "PURCHASE_COMPLETE",
  "data": {
    "buyer": {
      "email": "test.webhook@example.com",
      "name": "Maria Rodriguez Test",
      "phone": "+525512345678"
    },
    "purchase": {
      "price": {
        "value": 497.00,
        "currency_code": "MXN"
      }
    }
  }
}
"@

Write-Host "Enviando webhook de prueba..." -ForegroundColor Cyan
Write-Host "URL: $uri" -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri $uri -Method Post -Body $body -ContentType "application/json"
    
    Write-Host "`nRESPUESTA:" -ForegroundColor Green
    $response | ConvertTo-Json -Depth 10 | Write-Host
    
    if ($response.success) {
        Write-Host "`nSUCCESS! El webhook funciona correctamente." -ForegroundColor Green
    }
} catch {
    Write-Host "`nERROR:" -ForegroundColor Red
    Write-Host $_.Exception.Message
}
