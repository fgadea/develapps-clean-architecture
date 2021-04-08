# Develapps Clean Architecture README
The development of this packages is developed by Felipe Gadea Llopis and sponsored by Develapps.

This is an extension for developing mobile software with clean architecture focused on flutter. It works with others, it is simply a software architecture.
With this extension we make easy to work with clean architecture and we help developers to develope flutter projects focused on clean architecture.

## Features

This package has two functionalities, auto generates project structure and auto generates a custom feature structure.

- With auto generating project structure, the extension creates the following folders and files structure:

        ...
        lib/
            api/
            common/
                app_colors.dart
                app_routes.dart
                app_text_styles.dart
                app_themes.dart
                image_resources.dart
            core/
                error/
                platform/
                usecase/
            di/
            features/
                sample/
                    data/
                        datasources/
                        models/
                        repositories/
                    domain/
                        entities/
                        repositories/
                        usecases/
                    presentation/
                        bloc/
                        pages/
                            sample_page.dart
                        widgets/
        ...
        And the same for test directoriy.


- With custom feature generation the following folders and files structure is generates on features/ dir with a name givem by the user:

        ...
        your_feature_name/
            data/
                datasources/
                models/
                repositories/
            domain/
                entities/
                repositories/
                usecases/
            presentation/
                bloc/
                pages/
                    your_feature_name.dart
                widgets/
        ...

This is an example:

![Working sample](https://github.com/fgadea/develapps-clean-architecture/develappscleanarchitecture/captura1.png)

**The extension works also on command paletter but the easy way for using it is right clic on project directories.**


## Requirements

It is recomendable to have installed flutter_bloc package

## Release Notes

This extensions is under development and we will read your suggestions. 

### 1.0.0

First version of Develapps clean architecture.
