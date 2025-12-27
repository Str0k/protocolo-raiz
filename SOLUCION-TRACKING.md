# 🚨 SOLUCIÓN AL PROBLEMA DE TRACKING DE VENTAS

## ❌ PROBLEMA IDENTIFICADO

Tienes **2 ventas que no se registraron** en Facebook Pixel. Aquí está la razón:

### El webhook NO estaba configurado
- ✅ Pixel de Facebook instalado en el sitio (tracking de visitas)
- ❌ Webhook de Conversions API NO estaba desplegado
- ❌ Hotmart NO estaba configurado para enviar eventos

## ✅ SOLUCIÓN IMPLEMENTADA

### 1. Webhook Desplegado
- ✅ Código actualizado con mejor logging
- ✅ Desplegado a Vercel
- ✅ Disponible en: `https://sanatucuerpo.vercel.app/api/hotmart-webhook`

### 2. Próximos Pasos CRÍTICOS

---

## 📋 PASO 1: Configurar Webhook en Hotmart

### A. Ir a la configuración del producto

1. Ve a https://app-vlc.hotmart.com
2. Inicia sesión
3. Ve a **Productos** → Selecciona tu producto
4. Clic en **Configuraciones** o **Herramientas**
5. Busca la opción **Webhook** o **Notificaciones**

### B. Configurar la URL del Webhook

**URL a configurar:**
```
https://sanatucuerpo.vercel.app/api/hotmart-webhook
```

**Configuración:**
- ✅ Versión del Webhook: **V2** (recomendado)
- ✅ Método: **POST**
- ✅ Tipo de contenido: **application/json**

**Eventos a activar:**
- ✅ PURCHASE_COMPLETE
- ✅ PURCHASE_APPROVED  
- ✅ PURCHASE_DELAYED

### C. Probar el webhook

1. Hotmart tiene un botón **"Testar"** o **"Simular Postback"**
2. Selecciona evento: **PURCHASE_COMPLETE**
3. Haz clic en **Enviar**

---

## 📋 PASO 2: Verificar en Vercel

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto **sanatucuerpo**
3. Ve a pestaña **Functions**
4. Busca `/api/hotmart-webhook`
5. Deberías ver que se ejecutó (después del test)

**Si ves errores:**
- Copia el log completo
- Me lo envías para diagnosticar

---

## 📋 PASO 3: Verificar en Facebook

1. Ve a https://business.facebook.com/events_manager2/
2. Selecciona tu Pixel: **863038383089458**
3. Ve a **Test Events** (Eventos de Prueba)
4. Haz una compra de prueba
5. Deberías ver un evento **Purchase** aparecer

**IMPORTANTE:** Los eventos pueden tardar hasta 5 minutos en aparecer.

---

## 🔍 DIAGNÓSTICO: ¿Por qué NO se registraron las 2 ventas?

### Razón 1: Webhook no configurado
Si el webhook de Hotmart no está configurado, **Hotmart nunca envió la notificación** al servidor, por lo tanto Facebook nunca recibió los eventos.

### Razón 2: Pixel de Hotmart vs Conversions API
Instalar el pixel en Hotmart **NO** envía eventos de compra a Facebook automáticamente. Son dos sistemas diferentes:

- **Pixel en sitio web** = Tracking de visitas, clics, AddToCart
- **Conversions API (webhook)** = Tracking de compras CONFIRMADAS

---

## 🎯 PARA LAS 2 VENTAS QUE YA PASARON

**Opción 1: Reportarlas manualmente**
Puedes reportar las ventas manualmente usando Facebook Events Manager:
1. Ve a Events Manager
2. Clic en **"Upload Events"**
3. Sube un CSV con los datos de las compras

**Opción 2: No hacer nada**
Las ventas futuras se trackearán automáticamente una vez configures el webhook.

---

## ✅ CHECKLIST FINAL

Antes de que funcione todo:

- [ ] Configurar webhook en Hotmart (URL + eventos)
- [ ] Probar webhook con simulación de Hotmart
- [ ] Verificar logs en Vercel (debe aparecer el evento)
- [ ] Verificar en Facebook Events Manager (debe aparecer Purchase)
- [ ] Realizar una venta de prueba REAL
- [ ] Confirmar que aparece en Facebook

---

## 🆘 SI ALGO NO FUNCIONA

### Error en Vercel
- Copia el log completo
- Envíamelo para revisar

### No aparece en Facebook
Posibles causas:
1. **Access Token expirado** - Necesitarás generar uno nuevo
2. **Pixel ID incorrecto** - Verifica que sea 863038383089458
3. **Datos faltantes** - El webhook logea todo, revisa qué falta

### Hotmart no envía eventos
1. Verifica que el webhook esté **activado**
2. Verifica que los eventos estén **seleccionados**
3. Haz una venta de prueba (modo sandbox de Hotmart)

---

## 📞 SOPORTE

Si necesitas ayuda adicional, provee:
1. Screenshot de la configuración del webhook en Hotmart
2. Logs de Vercel (si hay errores)
3. Screenshot de Facebook Events Manager

---

**TIEMPO ESTIMADO DE CONFIGURACIÓN:** 10-15 minutos

Una vez configurado, **TODAS** las ventas futuras se trackearán automáticamente. ✨
