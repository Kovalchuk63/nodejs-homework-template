import express from "express";
import {
  authenticate,
  isEmptyBody,
  isValidId,
  upload,
} from "../../middlewares/index.js";
import contactController from "../../controllers/contacts-controller.js";
import {
  contactsAddSchema,
  updateFavoriteSchema,
} from "../../models/contacts/index.js";
import { validateBody } from "../../decorators/index.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactController.getAllContacts);

contactsRouter.get("/:id", isValidId, contactController.getById);

// upload.fields([{name: "poster", maxCount: 8}])
// upload.array("poster", 8)
contactsRouter.post(
  "/",
  upload.single("poster"),
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactController.add
);

contactsRouter.delete("/:id", isValidId, contactController.deleteById);

contactsRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactController.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  contactController.updateFavoriteById
);

export default contactsRouter;
