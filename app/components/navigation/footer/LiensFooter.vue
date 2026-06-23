<template>
  <ul class="flex flex-col tablet:flex-row desktop:justify-between" id="footer-links">
    <li tabindex="0" class="mb-4 desktop:w-1/5 w-full">
      <ul>
        <span class="font-bold text-lg">Good Recipes</span>
          <li tabindex="0">
            <ElementLink
              url="/au-menu-ce-soir"
              classes="block py-1 text-grey-950 hover:text-red-500 text-sm text-sm"
              :obfuscated="false"
              :internal="true"
            >
              Au menu ce soir
            </ElementLink>
          </li>
          <li tabindex="0">
            <ElementLink
              url="/recettes-festives"
              classes="block py-1 text-grey-950 hover:text-red-500 text-sm text-sm"
              :obfuscated="false"
              :internal="true"
            >
              Recettes festives
            </ElementLink>
          </li>
          <li tabindex="0">
            <ElementLink
              url="/recettes-rapides"
              classes="block py-1 text-grey-950 hover:text-red-500 text-sm text-sm"
              :obfuscated="false"
              :internal="true"
            >
              Recettes rapides
            </ElementLink>
          </li>
          <li tabindex="0">
            <ElementLink
              url="/menus"
              classes="block py-1 text-grey-950 hover:text-red-500 text-sm text-sm"
              :obfuscated="false"
              :internal="true"
            >
              Menus et plans de nutrition
            </ElementLink>
          </li>
      </ul>
    </li>

    <li class="mb-4 desktop:w-1/5 w-full" tabindex="0">
      <ul>
        <span class="text-lg font-bold">Catégories</span>
        <li tabindex="0">
          <ElementLink
            url="/barbecue"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Barbecue
          </ElementLink>
        </li>
        <li tabindex="0">
          <ElementLink
            url="/estivale"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Estivale
          </ElementLink>
        </li>
        <li tabindex="0">
          <ElementLink
            url="/festif"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Festif
          </ElementLink>
        </li>
        <li tabindex="0">
          <ElementLink
            url="/perte-de-poids"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Perte de poids
          </ElementLink>
        </li>
        <li tabindex="0">
          <ElementLink
            url="/prise-de-masse"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Prise de masse
          </ElementLink>
        </li>
        <li tabindex="0">
          <ElementLink
            url="/quotidien"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Quotidien
          </ElementLink>
        </li>
        <li tabindex="0">
          <ElementLink
            url="/soirée"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Soirée
          </ElementLink>
        </li>
        <li tabindex="0">
          <ElementLink
            url="/vegan"
            classes="block py-1 text-grey-950 hover:text-red-500 text-sm"
            :obfuscated="false"
            :internal="true"
          >
            Vegan
          </ElementLink>
        </li>
      </ul>
    </li>
  </ul>
</template>