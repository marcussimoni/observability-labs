package br.com.email_sender.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_email_message")
public class EmailMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column
    private String book;

    @Column
    private String shippingId;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    @Enumerated(EnumType.STRING)
    private EmailTemplate template;

    private String status;

    public EmailMessage() {}

    public EmailMessage(String userName, String email, String book, String status) {
        this.userName = userName;
        this.email = email;
        this.book = book;
        this.status = status;
    }

    public EmailMessage(String userName, String email, String book) {
        this.userName = userName;
        this.email = email;
        this.book = book;
        this.status = "WAITING_PAYMENT";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getBook() {
        return book;
    }

    public void setBook(String book) {
        this.book = book;
    }

    public EmailTemplate getTemplate() {
        return template;
    }

    public void setTemplate(EmailTemplate template) {
        this.template = template;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getShippingId() {
        return shippingId;
    }

    public void setShippingId(String shippingId) {
        this.shippingId = shippingId;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}