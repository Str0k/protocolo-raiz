# Test del Webhook de Hotmart

Este archivo contiene ejemplos para probar el webhook localmente y en producción.

## 📋 Payload de Prueba (Hotmart V2)

```json
{
  "event": "PURCHASE_COMPLETE",
  "data": {
    "buyer": {
      "email": "test@example.com",
      "name": "Juan Pérez",
      "phone": "+52 1234567890"
    },
    "purchase": {
      "price": {
        "value": 497.00,
        "currency_code": "MXN"
      },
      "order_date": "2025-12-26T19:00:00Z",
      "status": "approved"
    },
    "product": {
      "name": "El Protocolo de Raíz",
      "id": "12345"
    }
  }
}
```

## 🧪 Cómo Probar

### Opción 1: Usar curl (Windows PowerShell)

```powershell
$body = @{
    event = "PURCHASE_COMPLETE"
    data = @{
        buyer = @{
            email = "test@example.com"
            name = "Juan Pérez"
            phone = "+52 1234567890"
        }
        purchase = @{
            price = @{
                value = 497.00
                currency_code = "MXN"
            }
        }
    }
} | ConvertTo-Json -Depth 10

Invoke-RestMethod -Uri "https://sanatucuerpo.vercel.app/api/hotmart-webhook" -Method Post -Body $body -ContentType "application/json"
```

### Opción 2: Usar la herramienta de test de Hotmart

1. Ve a tu panel de Hotmart
2. Navega a **Herramientas** → **Webhook**
3. Selecciona tu producto
4. Haz clic en **"Simular Postback"**
5. Selecciona evento: **PURCHASE_COMPLETE**
6. Haz clic en **Enviar**

## 🔍 Ver Logs en Vercel

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto "sanatucuerpo"
3. Ve a la pestaña **Functions**
4. Busca `/api/hotmart-webhook`
5. Haz clic para ver los logs en tiempo real

## ⚙️ Configurar Webhook en Hotmart

### Paso a Paso:

1. **Ir a Hotmart**
   - Accede a https://app-vlc.hotmart.com
   - Inicia sesión con tu cuenta

2. **Configurar Webhook**
   - Ve a **Productos** → Selecciona tu producto
   - Navega a **Configuraciones** → **Webhook**
   - URL del Webhook: `https://sanatucuerpo.vercel.app/api/hotmart-webhook`
   - Versión: **V2** (recomendado)
   - Eventos a escuchar:
     - ✅ PURCHASE_COMPLETE
     - ✅ PURCHASE_APPROVED
     - ✅ PURCHASE_DELAYED

3. **Probar Conexión**
   - Hotmart tiene un botón "Testar" o "Simular"
   - Úsalo para enviar un evento de prueba
   - Verifica en los logs de Vercel que llegó correctamente

## 🎯 Verificar que Facebook recibe los eventos

1. Ve a [Facebook Events Manager](https://business.facebook.com/events_manager2/)
2. Selecciona tu Pixel (863038383089458)
3. Ve a **Test Events** o **Eventos de Prueba**
4. Realiza una compra de prueba o simula el webhook
5. Deberías ver el evento "Purchase" aparecer en tiempo real

## ⚠️ Troubleshooting

### Si no ves eventos en Facebook:

1. **Verifica el Access Token**
   - El token podría haber expirado
   - Ve a https://business.facebook.com/events_manager2/
   - Genera un nuevo token en **Settings** → **Conversions API**

2. **Verifica los logs**
   - Si hay errores 400/401 de Facebook, el access token es inválido
   - Si hay errores 404, el Pixel ID es incorrecto

3. **Verifica que Hotmart esté enviando datos**
   - Revisa que el webhook esté configurado correctamente
   - Asegúrate de que las ventas sean REALES (no test de Hotmart sandbox)

4. **Revisa el formato de datos**
   - Algunos campos pueden venir vacíos
   - El webhook logea TODA la información que recibe
