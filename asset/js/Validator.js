export default function Validator(options) {

  var formElement = $(options.form);

  var listRulesInit = {
    // key: selector
    // value: array of handle check
  };

  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  function validate(inpElement, rule) {
    var errorMessage;
    var formGroup = getParent(inpElement, options.formGroup);
    var errorElement = formGroup.querySelector(".form__error");
    for (var ruleCheck of listRulesInit[rule.selector]) {
      errorMessage = ruleCheck(inpElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      formGroup.classList.add("invalid");
      errorElement.innerHTML = errorMessage;
    }

    return !errorMessage
  }

  let rules = options.rules;
  rules.forEach((rule) => {
    if (!Array.isArray(listRulesInit[rule.selector])) {
      listRulesInit[rule.selector] = [rule.check];
    } else {
      listRulesInit[rule.selector].push(rule.check);
    }

    var inpElement = formElement.querySelector(rule.selector);
    inpElement.onblur = () => {
      validate(inpElement, rule);
    };

    inpElement.oninput = () => {
      var formGroup = getParent(inpElement, options.formGroup);
      var errorElement = formGroup.querySelector(".form__error");
      formGroup.classList.remove("invalid");
      errorElement.innerHTML = "";
    };
  });

  // Xử lí khi nhấn submit
  var btnSubmit = formElement.querySelector(options.btnSubmit)
  if (formElement) {
    btnSubmit.onclick = function (e) {
      e.preventDefault();
      var isForm = true
      rules.forEach((rule) => {
        var isSuccess = validate(formElement.querySelector(rule.selector), rule)
        if(!isSuccess) isForm = false
      })

      if(isForm) {
        var listInput = formElement.querySelectorAll("[name]:not([disable]");
        var formValues = Array.from(listInput).reduce((values, input) => {
          values[input.name] = input.value;
          return values;
        }, {});
        options.onSubmit(formValues)
      }
    };
  }
}

Validator.isRequired = function (selector) {
  return {
    selector,
    check: function (value) {
      return value ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector,
    check: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Vui lòng nhập email chính xác";
    },
  };
};

Validator.minLength = function (selector, len) {
  return {
    selector,
    check: function (value) {
      return value.length >= len
        ? undefined
        : `Vui lòng nhập tối thiểu ${len} kí tự`;
    },
  };
};

Validator.confirmation = function (selector, get) {
  return {
    selector,
    check: function (value) {
      return get() === value ? undefined : "Vui lòng nhập dữ liệu chính xác";
    },
  };
};
