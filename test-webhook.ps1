# Script para probar el webhook de Hotmart
# Simula una compra y envía al endpoint

$webhookUrl = "https://sanatucuerpo.vercel.app/api/hotmart-webhook"

# Payload de prueba simulando compra de Hotmart
$payload = @{
    event = "PURCHASE_COMPLETE"
    data = @{
        buyer = @{
            email = "prueba.webhook@gmail.com"
            name = "Ana Martinez Lopez"
            phone = "+525512349876"
        }
        purchase = @{
            price = @{
                value = 497.00
                currency_code = "MXN"
            }
            order_date = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssZ")
            status = "approved"
            transaction = "TEST_TX_$(Get-Random -Minimum 10000 -Maximum 99999)"
        }
        product = @{
            name = "El Protocolo de Raíz"
            id = "PROD_TEST_001"
        }
    }
} | ConvertTo-Json -Depth 10

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host "  PRUEBA DE WEBHOOK - HOTMART → FACEBOOK" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "`nEndpoint: $webhookUrl" -ForegroundColor Yellow
Write-Host "`nPayload de prueba:" -ForegroundColor Yellow
Write-Host $payload -ForegroundColor Gray
Write-Host "`n--------------------------------------------------" -ForegroundColor Cyan
Write-Host "Enviando solicitud..." -ForegroundColor Green

try {
    $response = Invoke-RestMethod `
        -Uri $webhookUrl `
        -Method Post `
        -Body $payload `
        -ContentType "application/json" `
        -TimeoutSec 30
    
    Write-Host "`n✅ RESPUESTA EXITOSA!" -ForegroundColor Green
    Write-Host "`n--------------------------------------------------" -ForegroundColor Cyan
    Write-Host "Respuesta del servidor:" -ForegroundColor Yellow
    Write-Host ($response | ConvertTo-Json -Depth 10) -ForegroundColor White
    Write-Host "`n--------------------------------------------------" -ForegroundColor Cyan
    
    if ($response.success -eq $true) {
        Write-Host "`n🎉 WEBHOOK FUNCIONANDO CORRECTAMENTE!" -ForegroundColor Green
        Write-Host "✅ Evento enviado a Facebook Conversions API" -ForegroundColor Green
        
        if ($response.purchaseData) {
            Write-Host "`nDatos procesados:" -ForegroundColor Yellow
            Write-Host "  Email: $($response.purchaseData.email)" -ForegroundColor White
            Write-Host "  Nombre: $($response.purchaseData.buyerName)" -ForegroundColor White
            Write-Host "  Valor: $($response.purchaseData.value) $($response.purchaseData.currency)" -ForegroundColor White
        }
        
        Write-Host "`n📊 Próximos pasos:" -ForegroundColor Cyan
        Write-Host "  1. Ve a Facebook Events Manager" -ForegroundColor White
        Write-Host "  2. Busca evento 'Purchase' de hace unos segundos" -ForegroundColor White
        Write-Host "  3. Verifica que aparezca con el valor de $497 MXN" -ForegroundColor White
    } else {
        Write-Host "`n⚠️  Webhook recibido pero hubo un problema:" -ForegroundColor Yellow
        Write-Host "  Error: $($response.error)" -ForegroundColor Red
    }
    
} catch {
    Write-Host "`n❌ ERROR AL ENVIAR WEBHOOK!" -ForegroundColor Red
    Write-Host "`nDetalles del error:" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.ErrorDetails.Message) {
        Write-Host "`nRespuesta del servidor:" -ForegroundColor Yellow
        Write-Host $_.ErrorDetails.Message -ForegroundColor Red
    }
}

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host ""
