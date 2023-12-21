# GymPass style App.

## FRs ( Function Requirements )

- [ ] Registration should be possible.
- [ ] Authentication should be possible.
- [ ] Retrieving the profile of the logged-in user should be possible.
- [ ] Obtaining the number of check-ins made by the logged-in user should be possible.
- [ ] Users should be able to access their check-in history.
- [ ] Users should be able to find nearby academies.
- [ ] Users should be able to check in at an academy.
- [ ] Checkin validate should be possible
- [ ] Users should be able to register with an academy.

## BRs ( Business Rules )

- [ ] The user should not be able to register with a duplicate email.
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia.
- [ ] The user cannot do two check-ins on the same day.
- [ ] The user cannot check in if not within 100 meters of the academy.
- [ ] A check-in can only be validated within 20 minutes of being created.
- [ ] A check-in can only be validated by administrator.
- [ ] The academy can only be registered by an administrator.

## NFRs ( Non-Funcional Requirements)

- [ ] The user's password must be encrypted.
- [ ] The application data must be persisted in a PostgreSQL database.
- [ ] All data lists must be paginated with a maximum of 20 items per page.
- [ ] The user must be identified by a JWT (JSON Web Token).
