
<template>
  <div>
    <!-- a. Text Interpolation -->
    <p>Text Interpolation: {{ message }}</p>

    <!-- b. Raw HTML [v-html] -->
    <div v-html="rawHtml"></div>

    <!-- c. Attribute Bindings [v-bind:id] -->
    <div :id="dynamicId">Attribute Binding</div>

    <!-- d. JavaScript expressions inside syntax i.e. {{ }} -->
    <p>{{ sum(2, 3) }}</p>

    <!-- e. Calling a Method -->
    <button @click="displayMessage">Display Message</button>

    <!-- a. Binding HTML class [v-bind:class] -->
    <div :class="{ active: isActive, 'text-danger': isError }">Class Binding</div>

    <!-- b. Binding Inline Styles [v-bind:style] -->
    <div :style="{ color: textColor, fontSize: fontSize + 'px' }">Style Binding</div>

    <!-- 6. List Rendering -->
    <!-- a. v-for with an Object -->
    <ul>
      <li v-for="(value, key) in objectData" :key="key">{{ key }}: {{ value }}</li>
    </ul>

    <!-- b. v-for with a Range -->
    <ul>
      <li v-for="n in 5" :key="n">Item {{ n }}</li>
    </ul>

    <!-- c. v-for on <template> -->
    <template v-for="item in items" :key="item.id">
      <div>{{ item.text }}</div>
      <hr />
    </template>

    <!-- d. v-for with v-if -->
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.text }}</li>
    </ul>

    <!-- e. v-for with a Component -->
    <ul>
      <custom-component
        v-for="item in customItems"
        :key="item.id"
        :item="item"
        @custom-event="handleCustomEvent"
      />
    </ul>

    <!-- 7. Event Handling: Listening to Events [v-on:click] -->
    <!-- a. Inline Handlers -->
    <button @click="handleClickInline">Click Me (Inline)</button>

    <!-- b. Method Handlers -->
    <button @click="handleClickMethod">Click Me (Method)</button>

    <!-- 8. Form Input Bindings -->
    <!-- a. v-model with various input types -->
    <input v-model="textModel" type="text" placeholder="Text Input" />
    <input v-model="checkboxModel" type="checkbox" />
    <input v-model="radioModel" type="radio" value="option1" />
    <select v-model="selectModel">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <textarea v-model="textareaModel" placeholder="Textarea"></textarea>

    <!-- b. v-model modifiers [.lazy , .number, .trim] -->
    <input v-model.lazy="lazyText" type="text" placeholder="Lazy Binding" />
    <input v-model.number="numberInput" type="text" placeholder="Number Modifier" />
    <input v-model.trim="trimInput" type="text" placeholder="Trim Modifier" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // a. Text Interpolation
    const message = ref('Hello, Vue!');

    // b. Raw HTML [v-html]
    const rawHtml = ref('<span style="color: blue;">This is raw HTML content.</span>');

    // c. Attribute Bindings [v-bind:id]
    const dynamicId = ref('my-element');

    // d. JavaScript expressions inside syntax i.e. {{ }}
    const sum = (a, b) => a + b;

    // e. Method to Display a Message
    const displayMessage = () => {
      alert(message.value); // Use .value to access ref values
    };

    // a. Binding HTML class [v-bind:class]
    const isActive = ref(true);
    const isError = ref(false);

    // b. Binding Inline Styles [v-bind:style]
    const textColor = ref('blue');
    const fontSize = ref(16);

    // 6. List Rendering
    // a. v-for with an Object
    const objectData = ref({ key1: 'value1', key2: 'value2' });

    // b. v-for with a Range
    const items = ref([{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]);

    // c. v-for on <template>
    const filteredItems = ref([{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]);

    // d. v-for with v-if
    const customItems = ref([{ id: 1, text: 'Custom Item 1' }, { id: 2, text: 'Custom Item 2' }]);

    // 7. Event Handling: Listening to Events [v-on:click]
    // a. Inline Handlers
    const handleClickInline = () => {
      alert('Clicked (Inline)');
    };

    // b. Method Handlers
    const handleClickMethod = () => {
      alert('Clicked (Method)');
    };

    // 8. Form Input Bindings
    // a. v-model with various input types
    const textModel = ref('');
    const checkboxModel = ref(false);
    const radioModel = ref('option1');
    const selectModel = ref('option1');
    const textareaModel = ref('');

    // b. v-model modifiers [.lazy, .number, .trim]
    const lazyText = ref('');
    const numberInput = ref(0);
    const trimInput = ref('');

    return {
      message,
      rawHtml,
      dynamicId,
      sum,
      displayMessage,
      isActive,
      isError,
      textColor,
      fontSize,
      objectData,
      items,
      filteredItems,
      customItems,
      handleClickInline,
      handleClickMethod,
      textModel,
      checkboxModel,
      radioModel,
      selectModel,
      textareaModel,
      lazyText,
      numberInput,
      trimInput,
    };
  },
};
</script>








