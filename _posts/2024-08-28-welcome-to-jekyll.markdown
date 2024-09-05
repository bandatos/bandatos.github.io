---
layout: post
title:  "Uso de datos de MiMovilidad y riesgos para la privacidad"
date:   2024-09-01 19:23:09 -0600
categories: datos ciberseguridad
---
En primer lugar, queremos expresar nuestra satisfacción y entusiasmo por el reciente lanzamiento de la apertura de datos relacionados con la movilidad en la ciudad. Este paso representa un avance significativo hacia la transparencia y permite a ciudadanos, investigadores y desarrolladores contribuir activamente al mejoramiento de los sistemas de transporte urbano. Su apoyo y compromiso con la apertura de datos son altamente valorados y celebrados por la comunidad.

## Necesidades de datos abiertos de movilidad
La disponibilidad de datos abiertos de movilidad es esencial para comprender y mejorar la eficiencia de los sistemas de transporte en nuestra ciudad. Estos datos permiten:
- Análisis detallado de patrones de movilidad: Ayudan a identificar tendencias y comportamientos de uso que pueden informar decisiones de planificación urbana y transporte.
- Desarrollo de aplicaciones y servicios innovadores: Facilitan la creación de herramientas que mejoran la experiencia de los usuarios y promueven el uso de transporte sustentable.
- Transparencia y participación ciudadana: Empoderan a los ciudadanos para involucrarse en procesos de toma de decisiones informadas y fomentar un diálogo constructivo con las autoridades.

## Potencial de las aplicaciones de revisión de movilidad
Un ejemplo notable del potencial que ofrecen los datos abiertos es la aplicación desarrollada por @jjsantos, la cual se puede apreciar en el siguiente enlace: [Tweet de @jjsantos*](https://x.com/jjsantoso/status/1823091566522581372). Esta aplicación demuestra cómo, mediante el análisis y visualización de datos, es posible obtener insights valiosos sobre el funcionamiento y uso de los sistemas de movilidad, contribuyendo así a su optimización y adaptabilidad a las necesidades de los usuarios.

## Preocupaciones de seguridad
A pesar de los beneficios mencionados, es importante abordar ciertas preocupaciones relacionadas con la privacidad y seguridad de los datos:

1. **API abierta sin CORS**: La ausencia de restricciones Cross-Origin Resource Sharing (CORS) en la API puede permitir que terceros no autorizados  ccedan y utilicen los datos de manera inapropiada, aumentando el riesgo de explotación y vulnerabilidades de seguridad.
2. **Acceso fácil a datos mediante número de tarjeta**: La posibilidad de extraer información detallada únicamente con el número de tarjeta plantea serios riesgos de privacidad, ya que individuos malintencionados podrían obtener y utilizar datos sensibles sin autorización.
3. **Escaneo remoto de tarjeta MI con NFC**: La capacidad de escanear tarjetas MI utilizando tecnologías NFC a través de dispositivos como teléfonos móviles o herramientas como el Flipper Zero expone a los usuarios a riesgos adicionales de clonación y robo de información. Aplicaciones como NFCGate (enlace a la aplicación) demuestran cómo este tipo de escaneo puede realizarse con relativa facilidad, subrayando la necesidad de reforzar las medidas de seguridad existentes.
4. **Granularidad de los datos y riesgos de acoso**: La combinación de datos detallados con el fácil acceso a través del número de tarjeta puede facilitar prácticas de acoso y seguimiento no deseado. Un ejemplo de estas preocupaciones se ilustra en este video de TikTok, donde se evidencia cómo la información puede ser explotada con fines inapropiados.

## Recomendaciones de mitigación
Con el fin de abordar y minimizar estos riesgos, proponemos las siguientes medidas:
1. **Restricción de acceso basada en autenticación**: En el caso específico de Ecobici, donde la tarjeta debe estar registrada a una cuenta con membresía, se sugiere limitar el acceso a los datos únicamente a aquellos que puedan autenticarse correctamente con sus credenciales asociadas.
2. **Asociación de tarjetas a cuentas de usuario seguras**: Establecer un sistema donde cada tarjeta esté vinculada a una cuenta de usuario protegida, permitiendo un control más estricto sobre quién puede acceder y utilizar la información de movilidad correspondiente.
3. **Fortalecimiento de las políticas de acceso en la API**: Configurar adecuadamente las políticas de CORS para restringir el acceso a la API únicamente a dominios y aplicaciones autorizados, reduciendo así el riesgo de accesos no deseados y usos indebidos de los datos. Estableciendo un registro de aplicaciones de terceros que puedan consumir la API, otorgando a la Semovi la capacidad de deshabilitar aquellas aplicaciones que no cumplan con los criterios.
## Conclusión
Creemos firmemente que la implementación de estas medidas contribuirá significativamente a garantizar la seguridad y privacidad de los usuarios, al mismo tiempo que se mantiene el espíritu de apertura y transparencia que caracteriza a su gestión. Estamos dispuestos a colaborar y aportar más detalles o apoyo técnico en la implementación de estas recomendaciones.
Agradecemos su atención y quedamos a la espera de su respuesta para continuar trabajando juntos hacia una movilidad más segura y eficiente en nuestra ciudad.
Atentamente,

Comunidad de Mexicana de daterxs - Bandatos