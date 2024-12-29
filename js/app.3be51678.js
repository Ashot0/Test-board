(function(){"use strict";var e={2766:function(e,a,o){var t=o(5130),c=o(657),l=o(5931);const s={en:{Home:"Home",BgPin:"Bg-pin",Carousel:"Carousel",Form:"Form",Map:"Map",backgroundPinText:"All pins are loaded when the page loads. Click the 'Fetch Pins' button to manually update them from the server. If you attempt to delete pins not found on the server, synchronization will occur 🧐",carouselText:"Each slider is a separate CarouselBlock component that contains data for the slider. The carousel is implemented so that all CarouselBlocks can pass the active slide variable and track its changes, enabling synchronization 🧐",formBlockFirstName:"Firstname",formBlockLastName:"Lastname",formBlockPhone:"Phone number",formBlockName:"Nickname",formBlockEmail:"Email",formBlockPassword:"Password",formBlockAccept1:"I agree to check this box.",formBlockAccept2:"I confirm that I agree to check this box too.",formBlockAccept3:"I confirm that I agree to check this box.",formBlockAccept4:"I agree to check this box as well.",formBlockAccept5:"I also agree to check this box.",formBlockMessage:"Message",accept:"Accept",errors:{firstNameTooShort:"First name must be at least 3 characters long",firstNameCapital:"First name must start with a capital letter",lastNameTooShort:"Last name must be at least 3 characters long",lastNameCapital:"Last name must start with a capital letter",phoneRequired:"Phone number is required",phoneInvalid:"Please enter a valid phone number",nameTooShort:"Nickname must be at least 3 characters long",emailRequired:"Email is required",emailInvalid:"Please enter a valid email",passwordTooShort:"Password must be at least 6 and no more than 24 characters long",passwordMissingCase:"Password must include both uppercase and lowercase letters",passwordMissingDigit:"Password must include at least one number",passwordMissingSpecial:"Password must include at least one special character from '@$!%*?&_-'",acceptRequired:"You must check this box to continue",messageRequired:"You cannot send an empty message"},mapBlock:"This section is temporarily unavailable due to a missing API key 🥲"},ru:{Home:"Главная",BgPin:"Картинка с пинами",Carousel:"Карусель",Form:"Форма",Map:"Карта",backgroundPinText:"Все пины загружаються при загрузке страницы, нажмите кнопку 'fetch pins' для ручного обновления с сервера. При попытке удаления пинов отсутствующих на сервере произойдёт синхронизация 🧐",carouselText:"Каждый слайдер это отдельный компонент CarouselBlock с прокинутыми данными для слайдера. Сама связанная карусель реализуеться засчёт того что у всех CarouselBlock есть возможность прокинуть переменную активного слайда и отслеживать её изменение по которому отрабатывать синхронизацию 🧐",formBlockFirstName:"Имя",formBlockLastName:"Фамилия",formBlockPhone:"Номер телефона",formBlockName:"Никнейм",formBlockEmail:"Email",formBlockPassword:"Пароль",formBlockAccept1:"Даю согласие на то чтобы поставить эту галочку",formBlockAccept2:"Подтверждаю что даю согласие на то чтобы поставить эту галочку",formBlockAccept3:"Утверждаю что даю согласие на то чтобы поставить эту галочку",formBlockAccept4:"Даю согласие на то чтобы поставить и эту галочку",formBlockAccept5:"Так же даю согласие на то чтобы поставить эту галочку",formBlockMessage:"Сообщение",accept:"Подтверждение",errors:{firstNameTooShort:"Имя должно быть больше трёх символов",firstNameCapital:"Имя должно начинаться с заглавной буквы",lastNameTooShort:"Фамилия должна быть больше трёх символов",lastNameCapital:"Фамилия должна начинаться с заглавной буквы",phoneRequired:"Номер телефона обязателен",phoneInvalid:"Введите корректный номер телефона",nameTooShort:"Никнейм должен быть больше трёх символов",emailRequired:"Email обязателен",emailInvalid:"Введите корректный email",passwordTooShort:"Пароль должен быть не меньше шести символов и не больше 24",passwordMissingCase:"Пароль должен содержать строчные и заглавные буквы",passwordMissingDigit:"Пароль должен содержать хотя бы одну цифру",passwordMissingSpecial:"Пароль должен содержать специальные символы '@$!%*?&_'",acceptRequired:"Поставьте галочку чтобы продолжить",messageRequired:"Нельзя отправить пустое сообщение"},mapBlock:"Раздел временно не доступен в связи с отсутствием API ключа 🥲"},ua:{Home:"Головна",BgPin:"Картинка з пінами",Carousel:"Карусель",Form:"Форма",Map:"Карта",backgroundPinText:"Усі піни завантажуються при завантаженні сторінки, натисніть кнопку 'fetch pins' для ручного оновлення із сервера. При спробі видалення пінів відсутніх на сервері відбудеться синхронізація 🧐",carouselText:"Кожен слайдер це окремий компонент CarouselBlock із прокинутими даними для слайдера. Сама зв'язана карусель реалізується за рахунок того, що у всіх CarouselBlock є можливість прокинути змінну активного слайда і відстежувати її зміну, за якою відпрацьовувати синхронізацію 🧐",formBlockFirstName:"Ім'я",formBlockLastName:"Прізвище",formBlockPhone:"Номер телефона",formBlockName:"Нікнейм",formBlockEmail:"Email",formBlockPassword:"Пароль",formBlockAccept1:"Даю згоду на те, щоб поставити цю галочку",formBlockAccept2:"Підтверджую що даю згоду на те, щоб поставити цю галочку",formBlockAccept3:"Стверджую, що даю згоду на те, щоб поставити цю галочку",formBlockAccept4:"Даю згоду на те, щоб поставити і цю галочку",formBlockAccept5:"Так само даю згоду на те, щоб поставити цю галочку",formBlockMessage:"Повідомлення",accept:"Підтвердження",errors:{firstNameTooShort:"Ім'я повинно бути більше трьох символів",firstNameCapital:"Ім'я повинно починатися з великої літери",lastNameTooShort:"Прізвище повинно бути більше трьох символів",lastNameCapital:"Прізвище повинно починатися з великої літери",phoneRequired:"Номер телефону обов'язковий",phoneInvalid:"Введіть коректний номер телефону",nameTooShort:"Нікнейм повинен бути більше трьох символів",emailRequired:"Email обов'язковий",emailInvalid:"Введіть коректний email",passwordTooShort:"Пароль повинен бути від 6 до 24 символів",passwordMissingCase:"Пароль повинен містити великі та малі літери",passwordMissingDigit:"Пароль має містити хоча б одну цифру",passwordMissingSpecial:"Пароль повинен містити спеціальні символи '@$!%*?&_-'",acceptRequired:"Ви повинні встановити цей прапорець, щоб продовжити",messageRequired:"Ви не можете відправити порожнє повідомлення"},mapBlock:"Розділ тимчасово не доступний через відсутність API ключа 🥲"}},r=(0,l.hU)({locale:"ru",fallbackLocale:"en",messages:s});var n=r,i=o(6768);function m(e,a){const o=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(o)}var p=o(1241);const u={},_=(0,p.A)(u,[["render",m]]);var k=_,d=o(1387),f=o(4232),b=o(144),v=o.p+"img/logo.899af2a2.png",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCElEQVR4nO2X6wrCMAxGjy/oVFb6Q59dQfGGvoGCMqggY9Ndki2DHNjf5Dvd2nTgOI7jOM40CMAdOAILhfpL4AzcgFy6+CwVfqXnAUTB+jHV/NQveolz/WogKRFL4YvnggKrikZ9JWJNzaKXCnlFwyew6binHhW11igjITFaeAmJ0cP3kTATvouEufBtJMyGbyJhPvy/M116dgz+JsyvfFOJSYSn5pvvM7FNhJ+ERJzyJg4/jkrJC6AKTc55sxKhxZAyJxE6TFgzEqHH9WB0iSBwtxlNIghezAaXyAb8qc9Q4KA0kGKFxB4FTorTNJYkil7iZGlltkqvOAN2qcdcob7jOI7jOEjzBg6mF3gmex/uAAAAAElFTkSuQmCC",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WwQmAQAwF0SlPt/+zC4t9RGxAZRH84DzIPTkEBiRJek8DOlDh04H16pARsGQ9nP0Xh6zAFrBk3cy54zL7P5IkSR9pZjxZ9TsCyrbMeEmSpGzNjCerfkdAnpcZL0kScw7zFAKxsVXx1wAAAABJRU5ErkJggg==";o(4114);const A={class:"burger-menu"},C={class:"burger-menu__navbar"};var w={__name:"BurgerMenu",emits:["close"],setup(e,{emit:a}){const o=(0,d.rd)(),t=(0,d.lq)(),{t:c}=(0,l.s9)(),s=a,r=async e=>{await o.push(e),s("close")};function n(e){let a=!1;return e===t.path&&(a=!0),a}return(e,a)=>((0,i.uX)(),(0,i.CE)("div",A,[(0,i.Lk)("nav",C,[(0,i.Lk)("button",{onClick:a[0]||(a[0]=e=>r("/")),class:(0,f.C4)([n("/")?"burger-menu__link_active":"","burger-menu__link"])},(0,f.v_)((0,b.R1)(c)("Home")),3),(0,i.Lk)("button",{onClick:a[1]||(a[1]=e=>r("/bg-pin")),class:(0,f.C4)([n("/bg-pin")?"burger-menu__link_active":"","burger-menu__link"])},(0,f.v_)((0,b.R1)(c)("BgPin")),3),(0,i.Lk)("button",{onClick:a[2]||(a[2]=e=>r("/carousel")),class:(0,f.C4)([n("/carousel")?"burger-menu__link_active":"","burger-menu__link"])},(0,f.v_)((0,b.R1)(c)("Carousel")),3),(0,i.Lk)("button",{onClick:a[3]||(a[3]=e=>r("/form")),class:(0,f.C4)([n("/form")?"burger-menu__link_active":"","burger-menu__link"])},(0,f.v_)((0,b.R1)(c)("Form")),3),(0,i.Lk)("button",{onClick:a[4]||(a[4]=e=>r("/map")),class:(0,f.C4)([n("/map")?"burger-menu__link_active":"","burger-menu__link"])},(0,f.v_)((0,b.R1)(c)("Map")),3)])]))}};const L=(0,p.A)(w,[["__scopeId","data-v-61f0b14e"]]);var B=L;const y={class:"header"},R={class:"header__navbar"},N={class:"header__btns"},E={key:0,src:g,alt:"",srcset:""},I={key:1,src:h,alt:"",srcset:""};var x={__name:"LayoutDefaultHeader",setup(e){const{t:a,locale:o}=(0,l.s9)(),t=(0,b.KR)(!1),c=()=>{t.value=!t.value},s=()=>{t.value=!1};return(e,l)=>{const r=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",y,[l[3]||(l[3]=(0,i.Lk)("img",{class:"header__logo",src:v,alt:""},null,-1)),(0,i.Lk)("nav",R,[(0,i.bF)(r,{class:"header__link",to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)((0,f.v_)((0,b.R1)(a)("Home")),1)])),_:1}),(0,i.bF)(r,{class:"header__link",to:"/bg-pin"},{default:(0,i.k6)((()=>[(0,i.eW)((0,f.v_)((0,b.R1)(a)("BgPin")),1)])),_:1}),(0,i.bF)(r,{class:"header__link",to:"/carousel"},{default:(0,i.k6)((()=>[(0,i.eW)((0,f.v_)((0,b.R1)(a)("Carousel")),1)])),_:1}),(0,i.bF)(r,{class:"header__link",to:"/form"},{default:(0,i.k6)((()=>[(0,i.eW)((0,f.v_)((0,b.R1)(a)("Form")),1)])),_:1}),(0,i.bF)(r,{class:"header__link",to:"/map"},{default:(0,i.k6)((()=>[(0,i.eW)((0,f.v_)((0,b.R1)(a)("Map")),1)])),_:1})]),t.value?((0,i.uX)(),(0,i.Wv)(B,{key:0,class:"header__burger",onClose:s})):(0,i.Q3)("",!0),(0,i.Lk)("div",N,[(0,i.Lk)("button",{class:"header__btn",onClick:l[0]||(l[0]=e=>o.value="en"),type:"button"}," EN "),(0,i.Lk)("button",{class:"header__btn",onClick:l[1]||(l[1]=e=>o.value="ru"),type:"button"}," RU "),(0,i.Lk)("button",{class:"header__btn",onClick:l[2]||(l[2]=e=>o.value="ua"),type:"button"}," UA "),(0,i.Lk)("button",{onClick:c,class:"header__burger-btn",type:"button"},[t.value?((0,i.uX)(),(0,i.CE)("img",E)):((0,i.uX)(),(0,i.CE)("img",I))])])])}}};const P=(0,p.A)(x,[["__scopeId","data-v-46c3fb6d"]]);var T=P;const F={class:"layout-default"},X={class:"layout-default__main"};var j={__name:"layoutDefaut",setup(e){return(e,a)=>((0,i.uX)(),(0,i.CE)("div",F,[(0,i.bF)(T,{class:"layout-default__header"}),(0,i.Lk)("main",X,[(0,i.RG)(e.$slots,"default")]),a[0]||(a[0]=(0,i.Lk)("footer",{class:"layout-default__footer"},[(0,i.Lk)("a",{href:"https://ashot0.github.io/Portfolio.2.0-public/#/"}," Created by Illia Golovan ")],-1))]))}};const M=j;var S=M,q={__name:"HomeView",setup(e){return(e,a)=>((0,i.uX)(),(0,i.Wv)(S,null,{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.Lk)("div",{class:"home"},"HomePage",-1)]))),_:1}))}};const U=(0,p.A)(q,[["__scopeId","data-v-9532cfda"]]);var V=U;const O={class:"form-block__wrapper"},J={class:"form-block__label"},Q={key:0,class:"form-block__error"},W={class:"form-block__label"},z={key:0,class:"form-block__error"},H={class:"form-block__label"},K={key:0,class:"form-block__error"},$={class:"form-block__label"},D={key:0,class:"form-block__error"},G={class:"form-block__label"},Y={key:0,class:"form-block__error"},Z={class:"form-block__label"},ee={key:0,class:"form-block__error"},ae={class:"form-block__label"},oe={key:0,class:"form-block__error"},te={class:"form-block__label"},ce={key:0,class:"form-block__error"},le={class:"form-block__label"},se={key:0,class:"form-block__error"},re={class:"form-block__label"},ne={key:0,class:"form-block__error"},ie={class:"form-block__label"},me={key:0,class:"form-block__error"},pe={class:"form-block__label"},ue={key:0,class:"form-block__error"},_e={key:0,class:"form-block__data-block"};var ke={__name:"FormBlock",setup(e){const{t:a}=(0,l.s9)(),o=(0,b.KR)(!1),c=(0,b.Kh)({firstName:"",lastName:"",phone:"",name:"",email:"",password:"",accept1:!1,accept2:!1,accept3:!1,accept4:!1,accept5:!1,message:""}),s=(0,b.Kh)({firstName:null,lastName:null,phone:null,name:null,email:null,password:null,accept1:null,accept2:null,accept3:null,accept4:null,accept5:null,message:null}),r=()=>{let e=!0;const o=/^\+?[1-9]\d{9,14}$/,t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,l=/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&_-]{6,24}$/,r=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{6,24}$/,n=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{6,24}$/;return c.firstName.length<3?(s.firstName=a("errors.firstNameTooShort"),e=!1):c.firstName[0]!==c.firstName[0].toUpperCase()?(s.firstName=a("errors.firstNameCapital"),e=!1):s.firstName=null,c.lastName.length<3?(s.lastName=a("errors.lastNameTooShort"),e=!1):c.lastName[0]!==c.lastName[0].toUpperCase()?(s.lastName=a("errors.lastNameCapital"),e=!1):s.lastName=null,c.phone?o.test(c.phone)?s.phone=null:(s.phone=a("errors.phoneInvalid"),e=!1):(s.phone=a("errors.phoneRequired"),e=!1),c.name.length<3?(s.name=a("errors.nameTooShort"),e=!1):s.name=null,c.email?t.test(c.email)?s.email=null:(s.email=a("errors.emailInvalid"),e=!1):(s.email=a("errors.emailRequired"),e=!1),c.password.length<6?(s.password=a("errors.passwordTooShort"),e=!1):l.test(c.password)?r.test(c.password)?n.test(c.password)?s.password=null:(s.password=a("errors.passwordMissingSpecial"),e=!1):(s.password=a("errors.passwordMissingDigit"),e=!1):(s.password=a("errors.passwordMissingCase"),e=!1),c.accept1?s.accept1=null:(s.accept1=a("errors.acceptRequired"),e=!1),c.accept2?s.accept2=null:(s.accept2=a("errors.acceptRequired"),e=!1),c.accept3?s.accept3=null:(s.accept3=a("errors.acceptRequired"),e=!1),c.accept4?s.accept4=null:(s.accept4=a("errors.acceptRequired"),e=!1),c.accept5?s.accept5=null:(s.accept5=a("errors.acceptRequired"),e=!1),c.message?s.message=null:(s.message=a("errors.messageRequired"),e=!1),e},n=()=>{r()&&(o.value=!0)};return(e,l)=>((0,i.uX)(),(0,i.CE)("div",O,[(0,i.Lk)("form",{onSubmit:(0,t.D$)(n,["prevent"]),class:"form-block"},[(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.firstName},"form-block__item form-block__first-name"])},[(0,i.Lk)("p",J,(0,f.v_)((0,b.R1)(a)("formBlockFirstName")),1),s.firstName?((0,i.uX)(),(0,i.CE)("span",Q,(0,f.v_)(s.firstName),1)):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_text","onUpdate:modelValue":l[0]||(l[0]=e=>c.firstName=e),type:"text",name:"first-name",id:"first-name"},null,512),[[t.Jo,c.firstName]])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.lastName},"form-block__item form-block__last-name"])},[(0,i.Lk)("p",W,(0,f.v_)((0,b.R1)(a)("formBlockLastName")),1),s.lastName?((0,i.uX)(),(0,i.CE)("span",z,(0,f.v_)(s.lastName),1)):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_text","onUpdate:modelValue":l[1]||(l[1]=e=>c.lastName=e),type:"text",name:"last-name",id:"last-name"},null,512),[[t.Jo,c.lastName]])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.phone},"form-block__item form-block__phone"])},[(0,i.Lk)("p",H,(0,f.v_)((0,b.R1)(a)("formBlockPhone")),1),s.phone?((0,i.uX)(),(0,i.CE)("span",K,(0,f.v_)(s.phone),1)):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_text","onUpdate:modelValue":l[2]||(l[2]=e=>c.phone=e),type:"tel",name:"phone",id:"phone"},null,512),[[t.Jo,c.phone]])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.name},"form-block__item form-block__name"])},[(0,i.Lk)("p",$,(0,f.v_)((0,b.R1)(a)("formBlockName")),1),s.name?((0,i.uX)(),(0,i.CE)("span",D,(0,f.v_)(s.name),1)):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_text","onUpdate:modelValue":l[3]||(l[3]=e=>c.name=e),type:"text",name:"name",id:"name"},null,512),[[t.Jo,c.name]])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.email},"form-block__item form-block__email"])},[(0,i.Lk)("p",G,(0,f.v_)((0,b.R1)(a)("formBlockEmail")),1),s.email?((0,i.uX)(),(0,i.CE)("span",Y,(0,f.v_)(s.email),1)):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_text","onUpdate:modelValue":l[4]||(l[4]=e=>c.email=e),type:"email",name:"email",id:"email"},null,512),[[t.Jo,c.email]])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.password},"form-block__item form-block__password"])},[(0,i.Lk)("p",Z,(0,f.v_)((0,b.R1)(a)("formBlockPassword")),1),s.password?((0,i.uX)(),(0,i.CE)("span",ee,(0,f.v_)(s.password),1)):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_text","onUpdate:modelValue":l[5]||(l[5]=e=>c.password=e),type:"password",name:"password",id:"password"},null,512),[[t.Jo,c.password]])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.accept1},"form-block__item form-block__accept"])},[(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_checkbox","onUpdate:modelValue":l[6]||(l[6]=e=>c.accept1=e),type:"checkbox",name:"accept1",id:"accept1"},null,512),[[t.lH,c.accept1]]),(0,i.Lk)("div",ae,[s.accept1?((0,i.uX)(),(0,i.CE)("p",oe,(0,f.v_)(s.accept1),1)):(0,i.Q3)("",!0),(0,i.eW)(" "+(0,f.v_)((0,b.R1)(a)("formBlockAccept1")),1)])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.accept2},"form-block__item form-block__accept"])},[(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_checkbox","onUpdate:modelValue":l[7]||(l[7]=e=>c.accept2=e),type:"checkbox",name:"accept2",id:"accept2"},null,512),[[t.lH,c.accept2]]),(0,i.Lk)("div",te,[s.accept2?((0,i.uX)(),(0,i.CE)("p",ce,(0,f.v_)(s.accept2),1)):(0,i.Q3)("",!0),(0,i.eW)(" "+(0,f.v_)((0,b.R1)(a)("formBlockAccept2")),1)])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.accept3},"form-block__item form-block__accept"])},[(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_checkbox","onUpdate:modelValue":l[8]||(l[8]=e=>c.accept3=e),type:"checkbox",name:"accept3",id:"accept3"},null,512),[[t.lH,c.accept3]]),(0,i.Lk)("div",le,[s.accept3?((0,i.uX)(),(0,i.CE)("p",se,(0,f.v_)(s.accept3),1)):(0,i.Q3)("",!0),(0,i.eW)(" "+(0,f.v_)((0,b.R1)(a)("formBlockAccept3")),1)])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.accept4},"form-block__item form-block__accept"])},[(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_checkbox","onUpdate:modelValue":l[9]||(l[9]=e=>c.accept4=e),type:"checkbox",name:"accept4",id:"accept4"},null,512),[[t.lH,c.accept4]]),(0,i.Lk)("div",re,[s.accept4?((0,i.uX)(),(0,i.CE)("p",ne,(0,f.v_)(s.accept4),1)):(0,i.Q3)("",!0),(0,i.eW)(" "+(0,f.v_)((0,b.R1)(a)("formBlockAccept4")),1)])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.accept5},"form-block__item form-block__accept"])},[(0,i.bo)((0,i.Lk)("input",{class:"form-block__input form-block__input_checkbox","onUpdate:modelValue":l[10]||(l[10]=e=>c.accept5=e),type:"checkbox",name:"accept5",id:"accept5"},null,512),[[t.lH,c.accept5]]),(0,i.Lk)("div",ie,[s.accept5?((0,i.uX)(),(0,i.CE)("p",me,(0,f.v_)(s.accept5),1)):(0,i.Q3)("",!0),(0,i.eW)(" "+(0,f.v_)((0,b.R1)(a)("formBlockAccept5")),1)])],2),(0,i.Lk)("div",{class:(0,f.C4)([{invalid:s.message},"form-block__item form-block__message"])},[(0,i.Lk)("p",pe,(0,f.v_)((0,b.R1)(a)("formBlockMessage")),1),s.message?((0,i.uX)(),(0,i.CE)("span",ue,(0,f.v_)(s.message),1)):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("textarea",{class:"form-block__input form-block__input_textarea","onUpdate:modelValue":l[11]||(l[11]=e=>c.message=e),name:"message",id:"message",cols:"30",rows:"10"},null,512),[[t.Jo,c.message]]),l[12]||(l[12]=(0,i.Lk)("button",{class:"form-block__submit-btn",type:"submit"},"submit",-1))],2)],32),o.value?((0,i.uX)(),(0,i.CE)("li",_e,[(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("formBlockFirstName"))+" : "+(0,f.v_)(c.firstName),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("formBlockLastName"))+" : "+(0,f.v_)(c.lastName),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("formBlockPhone"))+" : "+(0,f.v_)(c.phone),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("formBlockName"))+" : "+(0,f.v_)(c.name),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("formBlockEmail"))+" : "+(0,f.v_)(c.email),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("formBlockPassword"))+" : "+(0,f.v_)(c.password),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("accept"))+" 1 : "+(0,f.v_)(c.accept1),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("accept"))+" 2 : "+(0,f.v_)(c.accept2),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("accept"))+" 3 : "+(0,f.v_)(c.accept3),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("accept"))+" 4 : "+(0,f.v_)(c.accept4),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("accept"))+" 5 : "+(0,f.v_)(c.accept5),1),(0,i.Lk)("p",null,(0,f.v_)((0,b.R1)(a)("formBlockMessage"))+" : "+(0,f.v_)(c.message),1)])):(0,i.Q3)("",!0)]))}};const de=(0,p.A)(ke,[["__scopeId","data-v-d101068e"]]);var fe=de;const be={class:"form"};var ve={__name:"FormView",setup(e){return(e,a)=>((0,i.uX)(),(0,i.Wv)(S,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",be,[(0,i.bF)(fe)])])),_:1}))}};const ge=(0,p.A)(ve,[["__scopeId","data-v-5ebfffbe"]]);var he=ge,Ae=o.p+"img/BgPin.01d8cbf4.jpg";o(8992),o(4520);const Ce=(0,c.nY)("pinStore",(()=>{const e=(0,b.KR)([]),a=async()=>{try{const a=await fetch("https://676eb48adf5d7dac1ccb7865.mockapi.io/api/v2/pins",{method:"GET",headers:{"content-type":"application/json"}});if(!a.ok)throw new Error(a.status);const o=await a.json();e.value=o}catch(a){console.error("Ошибка при загрузке пинов:",a)}},o=async(a,o)=>{const t={pinX:a,pinY:o};try{const a=await fetch("https://676eb48adf5d7dac1ccb7865.mockapi.io/api/v2/pins",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});if(!a.ok)throw new Error(a.status);const o=await a.json();e.value.push(o)}catch(c){console.error("Error adding a pin:",c)}},t=async o=>{try{const a=await fetch(`https://676eb48adf5d7dac1ccb7865.mockapi.io/api/v2/pins/${o}`,{method:"DELETE",headers:{"content-type":"application/json"}});if(!a.ok)throw new Error(a.status);e.value=e.value.filter((e=>e.id!==o))}catch(t){console.error("Error when deleting pin:",t),await a()}};return{pins:e,fetchPins:a,addPin:o,deletePin:t}})),we=["onClick"],Le={class:"background-pin__info-block"},Be={class:"background-pin__text"};var ye={__name:"BackgroundPinView",setup(e){const{t:a}=(0,l.s9)(),o=Ce();function t(e){e.stopPropagation();const a=e.currentTarget,t=a.getBoundingClientRect(),c=(e.clientX-t.left)/t.width*100,l=(e.clientY-t.top)/t.height*100;o.addPin(c,l)}const c=(e,a)=>{e.stopPropagation(),o.deletePin(a.id)};return(0,i.sV)((()=>{o.fetchPins()})),(e,l)=>((0,i.uX)(),(0,i.Wv)(S,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",{onClick:l[0]||(l[0]=e=>t(e)),class:"background-pin"},[l[2]||(l[2]=(0,i.Lk)("img",{class:"background-pin__image",src:Ae,alt:""},null,-1)),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,b.R1)(o).pins,((e,a)=>((0,i.uX)(),(0,i.CE)("div",{key:a,onClick:a=>c(a,e),class:"background-pin__pin",style:(0,f.Tr)({top:`${e.pinY}%`,left:`${e.pinX}%`})}," 📍 ",12,we)))),128))]),(0,i.Lk)("div",Le,[(0,i.Lk)("button",{class:"background-pin__fetch-btn",onClick:l[1]||(l[1]=e=>(0,b.R1)(o).fetchPins()),type:"button"}," fetch pins "),(0,i.Lk)("p",Be,(0,f.v_)((0,b.R1)(a)("backgroundPinText")),1)])])),_:1}))}};const Re=(0,p.A)(ye,[["__scopeId","data-v-d93eab2e"]]);var Ne=Re,Ee={__name:"MapBlock",setup(e){const{t:a}=(0,l.s9)();return(e,o)=>((0,i.uX)(),(0,i.CE)("div",null,(0,f.v_)((0,b.R1)(a)("mapBlock")),1))}};const Ie=Ee;var xe=Ie;const Pe={class:"map-view"};var Te={__name:"MapView",setup(e){return(e,a)=>((0,i.uX)(),(0,i.Wv)(S,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",Pe,[(0,i.bF)(xe)])])),_:1}))}};const Fe=(0,p.A)(Te,[["__scopeId","data-v-9da43212"]]);var Xe=Fe;const je={class:"carousel-block"},Me={class:"carousel-block__items"},Se=["src"];var qe={__name:"CarouselBlock",props:{items:Array,activeItem:Number},emits:["update:index"],setup(e,{emit:a}){const o=e,t=a,c=e=>{t("update:index",e)},l=(0,b.KR)(!1),s=()=>{0===o.activeItem||l.value||(l.value=!0,c(o.activeItem-1),setTimeout((()=>{l.value=!1}),700))},r=()=>{o.activeItem<o.items.length-1&&!l.value&&(l.value=!0,c(o.activeItem+1),setTimeout((()=>{l.value=!1}),700))};return(e,a)=>((0,i.uX)(),(0,i.CE)("div",je,[(0,i.Lk)("div",Me,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.items,((e,a)=>((0,i.uX)(),(0,i.CE)("div",{key:a,class:(0,f.C4)(["carousel-block__item",{"carousel-block__item_active":o.activeItem===a,"carousel-block__item_unactive":o.activeItem!==a}])},[(0,i.Lk)("img",{class:"carousel-block__image",src:e.img,alt:"",srcset:""},null,8,Se)],2)))),128))]),(0,i.Lk)("div",{class:"carousel-block__buttons"},[(0,i.Lk)("button",{onClick:s,type:"button",class:"carousel-block__button"}," Prev "),(0,i.Lk)("button",{onClick:r,type:"button",class:"carousel-block__button"}," Next ")])]))}};const Ue=(0,p.A)(qe,[["__scopeId","data-v-730a6002"]]);var Ve=Ue,Oe=o.p+"img/1.9de3166b.jpg",Je=o.p+"img/2.d6f84779.jpg",Qe=o.p+"img/3.c47fdcf6.jpg",We=o.p+"img/4.3b918f55.jpg",ze=o.p+"img/5.903a59f4.jpg",He=o.p+"img/1.789664c0.jpg",Ke=o.p+"img/2.8a3788ce.jpg",$e=o.p+"img/3.af341c17.jpg",De=o.p+"img/4.78235949.jpg",Ge=o.p+"img/5.b9d3047a.jpg",Ye=o.p+"img/1.dce5c56d.jpg",Ze=o.p+"img/2.0992cb63.jpg",ea=o.p+"img/3.9cb7ad15.jpg",aa=o.p+"img/4.06a751e1.jpg",oa=o.p+"img/5.899b9e4e.jpg";const ta=[{name:"Item 1",img:Oe},{name:"Item 2",img:Je},{name:"Item 3",img:Qe},{name:"Item 4",img:We},{name:"Item 5",img:ze}],ca=[{name:"Item 1",img:He},{name:"Item 2",img:Ke},{name:"Item 3",img:$e},{name:"Item 4",img:De},{name:"Item 5",img:Ge}],la=[{name:"Item 1",img:Ye},{name:"Item 2",img:Ze},{name:"Item 3",img:ea},{name:"Item 4",img:aa},{name:"Item 5",img:oa}],sa={class:"carousel"},ra={class:"carousel__wrapper"},na={class:"carousel__text"};var ia={__name:"CarouselView",setup(e){const{t:a}=(0,l.s9)(),o=(0,b.KR)(0),t=e=>{o.value=e};return(e,c)=>((0,i.uX)(),(0,i.Wv)(S,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",sa,[(0,i.Lk)("div",ra,[(0,i.bF)(Ve,{items:(0,b.R1)(ta),activeItem:o.value,"onUpdate:index":t},null,8,["items","activeItem"]),(0,i.bF)(Ve,{items:(0,b.R1)(ca),activeItem:o.value,"onUpdate:index":t},null,8,["items","activeItem"]),(0,i.bF)(Ve,{items:(0,b.R1)(la),activeItem:o.value,"onUpdate:index":t},null,8,["items","activeItem"])]),(0,i.Lk)("p",na,(0,f.v_)((0,b.R1)(a)("carouselText")),1)])])),_:1}))}};const ma=(0,p.A)(ia,[["__scopeId","data-v-3e0c9d91"]]);var pa=ma;const ua=[{path:"/",name:"home",component:V},{path:"/form",name:"form",component:he},{path:"/bg-pin",name:"bg-pin",component:Ne},{path:"/map",name:"map",component:Xe},{path:"/carousel",name:"carousel",component:pa}],_a=(0,d.aE)({history:(0,d.Bt)(""),routes:ua});var ka=_a;const da=(0,c.Ey)();(0,t.Ef)(k).use(da).use(ka).use(n).mount("#app")}},a={};function o(t){var c=a[t];if(void 0!==c)return c.exports;var l=a[t]={exports:{}};return e[t].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(a,t,c,l){if(!t){var s=1/0;for(m=0;m<e.length;m++){t=e[m][0],c=e[m][1],l=e[m][2];for(var r=!0,n=0;n<t.length;n++)(!1&l||s>=l)&&Object.keys(o.O).every((function(e){return o.O[e](t[n])}))?t.splice(n--,1):(r=!1,l<s&&(s=l));if(r){e.splice(m--,1);var i=c();void 0!==i&&(a=i)}}return a}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[t,c,l]}}(),function(){o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,{a:a}),a}}(),function(){o.d=function(e,a){for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){o.p=""}(),function(){var e={524:0};o.O.j=function(a){return 0===e[a]};var a=function(a,t){var c,l,s=t[0],r=t[1],n=t[2],i=0;if(s.some((function(a){return 0!==e[a]}))){for(c in r)o.o(r,c)&&(o.m[c]=r[c]);if(n)var m=n(o)}for(a&&a(t);i<s.length;i++)l=s[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(m)},t=self["webpackChunktest_board"]=self["webpackChunktest_board"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(2766)}));t=o.O(t)})();
//# sourceMappingURL=app.3be51678.js.map