"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.connectToDb = exports.deleteUser = exports.updateUser = exports.findUser = exports.createUser = void 0;
var mongoose_1 = require("mongoose");
;
;
/**
 * SCHEMAS
 */
var complimentSchema = new mongoose_1.Schema({
    // FUTURE: change this to the ObjectID
    sender: { type: String, required: true },
    // FUTURE: change this to the ObjectID
    receiver: { type: String, required: true }
}, {
    timestamps: true
});
var flatterSchema = new mongoose_1.Schema({
    // FUTURE: change this to the ObjectID
    sender: { type: String, required: true },
    // FUTURE: change this to the ObjectID
    receiver: { type: String, required: true },
    imitations: { type: Number, required: true, "default": 0 },
    sweets: { type: Number, required: true, "default": 0 },
    bs: { type: Number, required: true, "default": 0 }
}, {
    timestamps: true
});
var userSchema = new mongoose_1.Schema({
    permanentName: { type: String, required: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});
/**
 * MODELS
 */
var Compliment = (0, mongoose_1.model)("Compliment", complimentSchema);
var Flatter = (0, mongoose_1.model)("Flatter", flatterSchema);
var User = (0, mongoose_1.model)("User", userSchema);
/**
 * CREATE FUNCTIONS
 */
function createCompliment(comp) {
    return __awaiter(this, void 0, void 0, function () {
        var compliment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    compliment = new Compliment(comp);
                    return [4 /*yield*/, compliment.save()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createFlatter(flat) {
    return __awaiter(this, void 0, void 0, function () {
        var flatter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flatter = new Flatter(flat);
                    return [4 /*yield*/, flatter.save()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createUser(u) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = new User(u);
                    return [4 /*yield*/, user.save()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createUser = createUser;
/**
 * READ FUNCTIONS
 */
function findCompliment(comp) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Compliment.findById(comp._id, function (err, resp) {
                        console.log("ERROR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
function findFlatter(flat) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Flatter.findById(flat._id, function (err, resp) {
                        console.log("ERROR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
function findUser(u) {
    User.findOne({ permanentName: u.permanentName }, function (err, resp) {
        console.log("RESP", resp);
        console.log("ERROR", err);
        return resp;
    });
}
exports.findUser = findUser;
;
/**
 * UPDATE FUNCTIONS
 */
function updateCompliment(comp) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Compliment.findByIdAndUpdate(comp._id, function (err, resp) {
                        console.log("ERROR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
function updateFlatter(flat) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Flatter.findByIdAndUpdate(flat._id, function (err, resp) {
                        console.log("ERROR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
function updateUser(u) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findByIdAndUpdate(u._id, function (err, resp) {
                        console.log("ERR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateUser = updateUser;
;
/**
 * DELETE FUNCTIONS
 */
function deleteCompliment(comp) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Compliment.findByIdAndDelete(comp._id, function (err, resp) {
                        console.log("ERR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
function deleteFlatter(flat) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Flatter.findByIdAndDelete(flat._id, function (err, resp) {
                        console.log("ERR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
;
function deleteUser(u) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User.findByIdAndDelete(u._id, function (err, resp) {
                        console.log("ERR", err);
                        return resp;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteUser = deleteUser;
;
/**
 * INIT FUNCTION
 */
function connectToDb() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/test")];
                case 1:
                    _a.sent();
                    console.log("SUCCESSFUL DB CONNECTION");
                    return [2 /*return*/];
            }
        });
    });
}
exports.connectToDb = connectToDb;
;
