'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">learn-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' :
                                            'id="xs-controllers-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' :
                                        'id="xs-injectables-links-module-AppModule-0bd1a3751526b7e459f3de0d2375c868d056357a85d2faf0ecb50f8ac0107a172231a0c10d628d2b67b917ff5aa7cc0d4242bed014f5e093f51a69322022150f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' : 'data-bs-target="#xs-controllers-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' :
                                            'id="xs-controllers-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' : 'data-bs-target="#xs-injectables-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' :
                                        'id="xs-injectables-links-module-CatsModule-53dab7e531e649336097337e1afe9337307d261991318e2db37cb0540a2b16ea37629d04df7daec8f5d67fd397cc5ebbcc95aafc07dd4ee63644d7af35699b3d"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DogModule.html" data-type="entity-link" >DogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DogModule-2c062e2e9e21896d0fb12e7f077f35751dc329f664f07f076138a6b637919aa71a34ab67cb95589039c6f122713d74c7e265b60efd9dfcd6fe8b9edea4947706"' : 'data-bs-target="#xs-controllers-links-module-DogModule-2c062e2e9e21896d0fb12e7f077f35751dc329f664f07f076138a6b637919aa71a34ab67cb95589039c6f122713d74c7e265b60efd9dfcd6fe8b9edea4947706"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DogModule-2c062e2e9e21896d0fb12e7f077f35751dc329f664f07f076138a6b637919aa71a34ab67cb95589039c6f122713d74c7e265b60efd9dfcd6fe8b9edea4947706"' :
                                            'id="xs-controllers-links-module-DogModule-2c062e2e9e21896d0fb12e7f077f35751dc329f664f07f076138a6b637919aa71a34ab67cb95589039c6f122713d74c7e265b60efd9dfcd6fe8b9edea4947706"' }>
                                            <li class="link">
                                                <a href="controllers/DogController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DogController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CatsController.html" data-type="entity-link" >CatsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DogController.html" data-type="entity-link" >DogController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppException.html" data-type="entity-link" >AppException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDto.html" data-type="entity-link" >CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDtoV2.html" data-type="entity-link" >CreateCatDtoV2</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForbiddenException.html" data-type="entity-link" >ForbiddenException</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ZodValidationPipi.html" data-type="entity-link" >ZodValidationPipi</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenMiddleware.html" data-type="entity-link" >AuthenMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CacheInterceptor.html" data-type="entity-link" >CacheInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatsService.html" data-type="entity-link" >CatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorsInterceptor.html" data-type="entity-link" >ErrorsInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalValidation.html" data-type="entity-link" >GlobalValidation</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingGlobalInterceptor.html" data-type="entity-link" >LoggingGlobalInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingModuleInterceptor.html" data-type="entity-link" >LoggingModuleInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModuleValidation.html" data-type="entity-link" >ModuleValidation</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseIntPipeV2.html" data-type="entity-link" >ParseIntPipeV2</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link" >TimeoutInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipeV2.html" data-type="entity-link" >ValidationPipeV2</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuardController.html" data-type="entity-link" >AuthGuardController</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuardGlobal.html" data-type="entity-link" >AuthGuardGlobal</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuardModule.html" data-type="entity-link" >AuthGuardModule</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CatInterFace.html" data-type="entity-link" >CatInterFace</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});