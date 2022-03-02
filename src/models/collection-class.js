"use strict";

class Collection {
  constructor(model) {
    this.model = model;
  }

  async createCollection(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      console.log(
        "error ",
        this.model.name
      );
    }
  }

  async readCollection(id) {
    try {
      if (id) {
        return await this.model.findOne({ where: { id: id } });
      } else {
        return await this.model.findAll();
      }
    } catch (error) {
      console.log(
        "error  ",
        this.model.name
      );
    }
  }

  async updateCollection(id, obj) {
    try {
      let newCollection = await this.model.findOne({ where: { id: id } });
      return await newCollection.update(obj);
    } catch (error) {
      console.log(
        "error  ",
        this.model.name
      );
    }
  }

  async deleteCollection(id) {
    try {
      return await this.model.destroy({ where: { id: id } });
    } catch (error) {
      console.log("error  ", this.model.name);
    }
  }
}
module.exports = Collection;
