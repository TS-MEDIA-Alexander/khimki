import React, {useEffect, useRef, useCallback, useState } from 'react';

export const formatterCalendar = new Intl.DateTimeFormat('ru', {
   year: 'numeric',
   month: '2-digit',
   day: '2-digit'
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


 const useEvent = (callback, args) => {
   const ref = useRef(callback);
   ref.current = callback;
   return useCallback((
     (...args) => {
       return ref.current(...args);
     }
   ), []);
 };

export const useTimeoutProgress = (timeout, handler, deps) => {
   const ref = useRef(null);
   const memoHandler = useEvent(handler);

   useEffect(() => {
     let startTime = performance.now();
     let needTime = startTime + timeout;
     let emit = false;
     let mount = true;
     let raf = requestAnimationFrame(loop);
 
     function loop(time) {
       if (!mount || emit)
         return;
 
       raf = requestAnimationFrame(loop);
 
       if (ref.current)
         ref.current.value = Math.min(Math.max((time - startTime) / timeout, 0), 1);
 
       if (time >= needTime) {
         emit = true;
         memoHandler();
       }
     }
 
     return () => {
       mount = false;
       cancelAnimationFrame(raf);
     };
 
   }, [deps]);
 
   return ref;
 };

 export function useLocalStorage(key, initialValue) {
   // Инициализация состояния с использованием данных из localStorage
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.error('Ошибка при чтении из localStorage', error);
         return initialValue;
      }
   });

   // Функция для обновления состояния и localStorage
   const setValue = (value) => {
      try {
         const valueToStore = value instanceof Function ? value(storedValue) : value;
         setStoredValue(valueToStore);
         window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
         console.error('Ошибка при записи в localStorage', error);
      }
   };
   return [storedValue, setValue];
}