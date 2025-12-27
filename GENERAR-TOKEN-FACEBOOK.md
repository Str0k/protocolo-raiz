# 🔑 GUÍA: Generar Nuevo Access Token de Facebook

## ❌ PROBLEMA DETECTADO:
El Access Token actual está **expirado o mal formado**.
- Error de Facebook: **Code 190 - OAuthException**
- Mensaje: "Malformed access token"

## ✅ SOLUCIÓN: Generar un nuevo token

---

## 📋 PASOS DETALLADOS:

### **Paso 1: Ir a la Configuración del Pixel**

1. **Inicia sesión en Facebook** (si no lo has hecho)
   
2. **Abre este enlace directo:**
   ```
   https://business.facebook.com/events_manager2/pixel/863038383089458/settings
   ```
   
3. Te llevará directamente a la configuración de tu Pixel

---

### **Paso 2: Encontrar la sección Conversions API**

Una vez en la página de configuración:

1. Desplázate hacia abajo hasta encontrar la sección:
   - **"API de conversiones"** o
   - **"Conversions API"**

2. Busca el apartado que dice:
   - **"Configurar manualmente"** o
   - **"Manually Configure"**

---

### **Paso 3: Generar el Token**

1. Haz clic en el botón o enlace que dice:
   - **"Generar token de acceso"** o
   - **"Generate Access Token"**

2. Facebook te mostrará un token largo (aproximadamente 200 caracteres)

3. **Copia todo el token** (usa el botón de copiar si está disponible)

---

### **Paso 4: Actualizar el Token en el Código**

Una vez que tengas el nuevo token:

1. **Envíamelo aquí** y yo lo actualizaré en el código
2. Lo guardaremos en el archivo `api/hotmart-webhook.js`
3. Haremos un nuevo deploy a Vercel
4. Probaremos nuevamente el webhook

---

## ⚠️ IMPORTANTE:

### Mantén el token seguro:
- ❌ NO lo compartas públicamente
- ❌ NO lo subas a GitHub sin protección
- ✅ Solo compártelo conmigo (lo usaré solo para configurar tu webhook)

### Tipos de tokens:
Si Facebook te pregunta qué tipo de token necesitas:
- ✅ **System User Access Token** (Recomendado - nunca expira)
- ✅ **Page Access Token** (Puede expirar)
- ✅ **User Access Token** (Expira más rápido)

---

## 🔄 ALTERNATIVA: Usar Variables de Entorno

Una vez que tengas el nuevo token, podemos:

1. **Opción A (Más segura):** Guardarlo como variable de entorno en Vercel
2. **Opción B (Más rápida):** Guardarlo directamente en el código

Te recomiendo la **Opción A** para producción.

---

## 📞 ¿Necesitas ayuda?

Si tienes problemas para encontrar la opción:
- Envíame un screenshot de la página de configuración
- Te guiaré con instrucciones más específicas

---

## ✨ PRÓXIMOS PASOS:

Una vez que me envíes el nuevo token:

1. ✅ Actualizo el código con el nuevo token
2. ✅ Desplegamos a Vercel
3. ✅ Hacemos test de compra
4. ✅ Verificamos que aparezca en Facebook Events Manager
5. ✅ Confirmamos que todo funciona perfectamente

**Tiempo estimado:** 5 minutos

---

**¿Ya tienes el nuevo token? Envíamelo y continuamos!** 🚀
