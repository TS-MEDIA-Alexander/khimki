export const formatterCalendar = new Intl.DateTimeFormat('ru', {
   day: '2-digit',
   month: '2-digit',
   year: 'numeric'
})

export function maskInput(value, mask) {
   var literalPattern = /[0\*]/;
   var numberPattern = /[0-9]/;
   var newValue = "";
   try {
     var maskLength = mask.length;
     var valueIndex = 0;
     var maskIndex = 0;
 
     for (; maskIndex < maskLength;) {
       if (maskIndex >= value.length) break;
 
       if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;
 
       // Found a literal
       while (mask[maskIndex].match(literalPattern) === null) {
         if (value[valueIndex] === mask[maskIndex]) break;
         newValue += mask[maskIndex++];
       }
       newValue += value[valueIndex++];
       maskIndex++;
     }
 
   } catch (e) {
     console.log(e);
   }
   return newValue
 }