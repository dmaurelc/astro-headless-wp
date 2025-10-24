# Configuración de Resend para el Formulario de Contacto

Este documento describe la configuración e integración de Resend.com en el formulario de contacto del sitio web.

## Configuración Completada

### 1. Instalación de Dependencias
Se instaló el SDK oficial de Resend:
```bash
npm install resend
```

### 2. Variables de Entorno
Se creó el archivo `.env` con las siguientes variables:

```env
# Resend API Configuration
RESEND_API_KEY=re_RPH8vPVt_FEcsR46EzwAv3k36ZJtcj

# Email configuration
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=info@propiedades.com
```

> **IMPORTANTE**: El archivo `.env` ya está incluido en `.gitignore` para mantener la API key segura.

### 3. Endpoint API
Se creó el archivo `src/pages/api/contact.ts` que maneja las solicitudes POST del formulario de contacto.

**Características del endpoint:**
- Validación de campos requeridos
- Validación de formato de email
- Envío de emails con formato HTML y texto plano
- Manejo de errores robusto
- Respuestas JSON claras

### 4. Actualización del Formulario
Se actualizó `src/pages/contacto.astro` para:
- Conectar con el endpoint `/api/contact`
- Mostrar indicador de carga durante el envío
- Mostrar mensajes de éxito/error al usuario
- Resetear el formulario después del envío exitoso

## Configuración Adicional Requerida

### Configurar Dominio en Resend

Para que los emails se envíen correctamente, necesitas configurar tu dominio en Resend:

1. **Accede a tu cuenta de Resend**: https://resend.com/login
2. **Agrega tu dominio**:
   - Ve a "Domains" en el panel de control
   - Haz clic en "Add Domain"
   - Ingresa tu dominio (ej: `propiedades.com`)
3. **Configura los registros DNS**: Resend te proporcionará los registros DNS que necesitas agregar en tu proveedor de dominio
4. **Verifica el dominio**: Una vez configurados los DNS, Resend verificará automáticamente tu dominio

### Actualizar Variables de Entorno

Después de configurar tu dominio, actualiza el archivo `.env`:

```env
# Reemplaza con tu dominio verificado
EMAIL_FROM=noreply@tudominio.com

# Email donde recibirás los mensajes de contacto
EMAIL_TO=contacto@tudominio.com
```

## Estructura de Archivos Creados/Modificados

```
astro-headless-wp/
├── .env                           # Variables de entorno (NO COMMITEAR)
├── src/
│   └── pages/
│       ├── api/
│       │   └── contact.ts         # Endpoint API para el formulario
│       └── contacto.astro         # Página de contacto (MODIFICADA)
└── RESEND_SETUP.md               # Este archivo
```

## Formato del Email Enviado

Cuando un usuario envía el formulario, se envía un email con:
- **Asunto**: "Nuevo mensaje de contacto: [Tipo de asunto]"
- **Formato HTML**: Email con diseño profesional y botones de acción
- **Formato Texto**: Versión en texto plano para clientes que no soporten HTML
- **Información incluida**:
  - Nombre del contacto
  - Email del contacto
  - Teléfono (opcional)
  - Asunto seleccionado
  - Mensaje completo
  - Botones para responder por email o WhatsApp

## Testing Local

Para probar el formulario en desarrollo:

```bash
npm run dev
```

Luego visita: http://localhost:4321/contacto

> **Nota**: En desarrollo, asegúrate de que las variables de entorno estén correctamente configuradas en `.env`

## Testing en Producción

Antes de desplegar a producción:

1. Asegúrate de que tu dominio esté verificado en Resend
2. Configura las variables de entorno en tu plataforma de hosting (Vercel, Netlify, etc.)
3. **NUNCA** subas el archivo `.env` a tu repositorio

### Ejemplo de configuración en Vercel/Netlify:

```bash
RESEND_API_KEY=re_RPH8vPVt_FEcsR46EzwAv3k36ZJtcj
EMAIL_FROM=noreply@tudominio.com
EMAIL_TO=contacto@tudominio.com
```

## Solución de Problemas

### Error: "Authentication required"
- Verifica que `RESEND_API_KEY` esté correctamente configurada
- Asegúrate de que la API key sea válida

### Error: "Domain not verified"
- Configura y verifica tu dominio en el panel de Resend
- Usa el mismo dominio en `EMAIL_FROM`

### Los emails no llegan
1. Verifica que el dominio esté verificado
2. Revisa la bandeja de spam
3. Consulta los logs en el panel de Resend

## Recursos Adicionales

- [Documentación de Resend](https://resend.com/docs)
- [Guía de verificación de dominio](https://resend.com/docs/dashboard/domains/introduction)
- [API Reference](https://resend.com/docs/api-reference/emails/send-email)

## Seguridad

- ✅ API key almacenada en variables de entorno
- ✅ `.env` incluido en `.gitignore`
- ✅ Validación de datos en el servidor
- ✅ Manejo de errores sin exponer información sensible
- ⚠️ **RECUERDA**: Nunca expongas tu API key públicamente

## Soporte

Si encuentras problemas con la integración:
1. Revisa los logs del servidor/consola del navegador
2. Verifica la configuración de variables de entorno
3. Consulta el panel de Resend para ver el estado de los envíos
