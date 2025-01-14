/**
 * Регулярное выражение для проверки адресов электронной почты
 * @example
 * ```typescript
 * const isValidEmail = emailRegExp.test('example@example.com');
 * ```
 */
const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

/**
 * Регулярное выражение для проверки URL-адресов.
 * @remarks
 * Это регулярное выражение предназначено для соответствия наиболее распространенным форматам URL-адресов.
 * @example
 * ```typescript
 * const isValidUrl = urlRegExp.test('https://www.example.com');
 * ```
 */
const urlRegExp = /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

export {
  emailRegExp,
  urlRegExp
}
