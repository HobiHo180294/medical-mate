export const textFieldRules = (
  fieldName?: string | boolean | undefined,
  minValue?: number | undefined,
  maxValue?: number | undefined,
  patternValue?: RegExp | undefined,
  required?: boolean
) => ({
  required: required && fieldName ? `The ${fieldName} field is required` : false,
  minLength: minValue
    ? {
        value: minValue,
        message: `Min length ${minValue as number} symbols`,
      }
    : undefined,
  maxLength: maxValue
    ? {
        value: maxValue,
        message: `Max length ${maxValue as number} symbols`,
      }
    : undefined,
  pattern: patternValue
    ? {
        value: patternValue,
        message: `Invalid ${fieldName} format`,
      }
    : undefined,
});
