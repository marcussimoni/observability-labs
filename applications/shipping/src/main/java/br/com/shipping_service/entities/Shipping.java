package br.com.shipping_service.entities;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDateTime;

@Document(collection = "shipping")
public class Shipping {

    @MongoId
    @Field(name = "_id")
    private ObjectId _id;

    @Field("state")
    private String state;

    @Field("city")
    private String city;

    @Field("book")
    private String book;

    @Field("sentAt")
    private LocalDateTime sentAt;

//    @Field("status")
    @Transient
    private ShippingStatus status;

    @Field("publicIdentifier")
    private String publicIdentifier;

    public Shipping() {
        this.sentAt = LocalDateTime.now();
        this.status = ShippingStatus.CREATED;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getBook() {
        return book;
    }

    public void setBook(String book) {
        this.book = book;
    }

    public LocalDateTime getSentAt() {
        return sentAt;
    }

    public ShippingStatus getStatus() {
        return status;
    }

    public String getPublicIdentifier() {
        return publicIdentifier;
    }

    public void setPublicIdentifier(String publicIdentifier) {
        this.publicIdentifier = publicIdentifier;
    }

    public ObjectId getId() {
        return _id;
    }
}
