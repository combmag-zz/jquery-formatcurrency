# formatCurrency(destination _optional_, options) #

## Overview ##
The formatCurrency function modifies the values or contents of a jQuery object set into a currency amount.

| **destination** | string | optional |
|:----------------|:-------|:---------|

An optional property in the [jQuery selector](http://docs.jquery.com/Selectors) format that will recieve the formatted version of the object set.  If no destination is provided the original contents will be replaced with the formatted version.

## Options ##

| **colorize** | boolean | default: false |
|:-------------|:--------|:---------------|

A boolean flag for colorizing the element after formatting the currency.  If true the destination will be set to black when the value is positive and red when the value is negative.  If false the color css value will not be modified.

| **decimalSymbol** | string | default: '.' |
|:------------------|:-------|:-------------|

The symbol to be used to seperate the dollars from the cents.

| **digitGroupSymbol** | string | default: ',' |
|:---------------------|:-------|:-------------|

The symbol to be used to seperate the thousands place when grouping the numbers.

| **dropDecimals** | boolean | default: false | **_deprecated in 1.1_** see roundToDecimalPlace |
|:-----------------|:--------|:---------------|:------------------------------------------------|

**_deprecated_** A boolean flag for dropping decimal places (cents) at the end of the dollar amount.

| **eventOnDecimalsEntered** | boolean| default: false |
|:---------------------------|:-------|:---------------|

Enable this flag if you only want numbers without any decimals. This will enable triggering of the custom decimalsEntered event. Binding to this event will indicate what the decimal amount is. This allows for easy notification to the end user.

| **groupDigits** | boolean | default: true |
|:----------------|:--------|:--------------|

A boolean flag for grouping the digits into the thousands.  If true the value of 1000 would result in $1,000.00.  When false the value of 1000 would result in $1000.00.

| **negativeFormat** | string | default: '(%s%n)' |
|:-------------------|:-------|:------------------|

The format notation for setting destination value. The **%s** variable signifies the symbol, and the **%n** variable signifies the number. An example of the default settings if the number 1000 were passed using '%s%n' would resulting in ($1,000.00).

| **positiveFormat** | string | default: '%s%n' |
|:-------------------|:-------|:----------------|

The format notation for setting destination value.  The **%s** variable signifies the symbol, and the **%n** variable signifies the number. An example of the default settings if the number 1000 were passed using '%s%n' would resulting in $1,000.00.

| **region** | string | default: '' |
|:-----------|:-------|:------------|

One of the many cultures listed on the InternationalSupport page.  In order to use these values you will have to include the corresponding i18n file to your page.  You can also include the jQuery.formatCurrency.all.js file to include all supported regions.  If a culture cannot be found the region will be attempted, if the region cannot be found the default value will be used. (eg.  If the region supplied is 'es-MX' and 'es-MX' is not found 'es' will be used.  If 'es is not found then '' will be used).

| **roundToDecimalPlace** | int | default: 2 |
|:------------------------|:----|:-----------|

An integer that indicates what decimal digit to round to (e.g. 0, 2, etc.). Use -1 to disable rounding with 2 decimals and use -2 to disable rounding with 0 decimals. Defaults to 2 decimal digits with rounding.

| **symbol** | string | default: '$' |
|:-----------|:-------|:-------------|

The currency symbol to be used in the %s value of the postive or negative formats.

## Events ##
| **decimalsEntered** |
|:--------------------|

Fires when the field being formatted contains decimals.  Requires the eventOnDecimalsEntered be set to true.

## Examples ##
For a working demo see http://bendewey.com/code/formatCurrency/demo.  Here are some common examples

```
$('.label').formatCurrency();
```
Formats the values of any DOM elements with a class of 'label' as currency.

```
$('.source').formatCurrency('.destination');
```
Converts the value of a DOM element with a class of 'source' as currency to the element with a class of destination.  If multiple items result from the source or destination objects all the destinations will be set to the last source value.

```
$('.label').formatCurrency({ colorize:true });
```
Automatically sets the color css property depending on whether the value is positive or negative.

```
$('.label').formatCurrency({ colorize:true, region: 'de-DE' });
// or
$('.label').formatCurrency($.extend({ colorize: true }, $.formatCurrency.region['de-DE']));
```
The resulting value of the .label elements will be formatted using the 'German (Germany)' currency format, and the results will change color based whether the output is positive or negative.

# toNumber(options) #

## Overview ##
Converts the value or contents of the supplied DOM elements to the number format.  This is useful when you wish to trim or validate the contents of a user input.

## Options ##

| **decimalSymbol** | string | default: '.' |
|:------------------|:-------|:-------------|

The symbol to be used to seperate the dollars from the cents.

| **region** | string | default: '' |
|:-----------|:-------|:------------|

One of the many cultures listed on the InternationalSupport page.  In order to use these values you will have to include the corresponding i18n file to your page.  You can also include the jQuery.formatCurrency.all.js file to include all supported regions.  See the formatCurrency region property for more information.

## Examples ##
```
$('.ageInput').toNumber();
```
Changes the contents of the .ageInput field to a number removing any invalid characters.  Invalid characters include any number, the negative sign -, and the decimalSymbol.

```
$('.ageInput').toNumber({region: 'de-DE'});
```
Changes the contents of the .ageInput field as a German (Germany) number.


# asNumber(options) #

## Overview ##
returns the value or contents of the first DOM elements as a number.  This is useful when retrieving the number value of a field.

## Options ##

| **parse** | boolean| default: true |
|:----------|:-------|:--------------|

A boolean flag of whether to parse the value of contents of the supplied elements.  If false the parseType will be used, otherwise, if false the value will be returned as a string.

| **parseType** | string | default: 'Float' |
|:--------------|:-------|:-----------------|

  * **Float** - uses parseFloat for parsing.
  * **Int** - uses parseInt for parsing.

The parse type to be used.

| **region** | string | default: '' |
|:-----------|:-------|:------------|

One of the many cultures listed on the InternationalSupport page.  In order to use these values you will have to include the corresponding i18n file to your page.  You can also include the jQuery.formatCurrency.all.js file to include all supported regions.  See the formatCurrency region property for more information.


## Examples ##
```
var mileage = $('.mileageInput').asNumber();
```
Returns milage as a float for the value supplied in the .mileageInput element.

```
var age = $('.ageInput').asNumber({ parseType: 'int' });
```
Returns age as an integer for the value supplied in the .ageInput element.