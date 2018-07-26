// other imports
import io.circe.refined._
sealed trait Environment
case object LiveEnvironment
case object OtherEnvironment

implicit val decodeEnvironment: Decoder[Environment] = (c: HCursor) =>
  for {
    environment <- c.value.as[NonEmptyString].map(_.value.toLowerCase)
  } yield
  environment match {
    case "live" => LiveEnvironment
    case _      => OtherEnvironment
  }
  