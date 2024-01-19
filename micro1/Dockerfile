FROM openjdk:17

WORKDIR /App

COPY /target/taxe_tnb-0.0.1-SNAPSHOT.jar .

EXPOSE 9090

ENTRYPOINT ["java", "-jar", "taxe_tnb-0.0.1-SNAPSHOT.jar"]